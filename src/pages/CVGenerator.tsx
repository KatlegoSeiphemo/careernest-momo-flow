import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Download, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph } from "docx";
import jsPDF from "jspdf";

const CVGenerator = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalInfo: { fullName: "", email: "", phone: "", location: "", linkedIn: "" },
    summary: "",
    experience: "",
    education: "",
    skills: "",
    achievements: "",
    coverLetter: ""
  });
  const [generatedCV, setGeneratedCV] = useState("");
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState("");
  const [uploadedCVs, setUploadedCVs] = useState<File[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (section: string, field: string, value: string) => {
    if (section === "personalInfo") {
      setFormData((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
  };

  // 📥 Upload CV
  const handleCVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedCVs((prev) => [...prev, ...Array.from(e.target.files)]);
      toast.success("CV uploaded successfully!");
    }
  };

  // 📤 Call backend to generate CV + Cover Letter
  const generateCV = async () => {
    if (uploadedCVs.length === 0 && !formData.summary) {
      toast.error("Please upload a CV or fill out details.");
      return;
    }

    setIsGenerating(true);

    try {
      const formDataObj = new FormData();
      if (uploadedCVs[0]) formDataObj.append("cv", uploadedCVs[0]);
      else formDataObj.append("cvText", JSON.stringify(formData));

      formDataObj.append("targetRole", "Software Developer"); // example role

      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        body: formDataObj,
      });

      const data = await res.json();
      setGeneratedCV(data.improvedCV);
      setGeneratedCoverLetter(data.coverLetter);

      toast.success("AI CV & Cover Letter generated!");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong while generating.");
    } finally {
      setIsGenerating(false);
    }
  };

  // 💾 Download Helpers
  const downloadAsDocx = async (content: string, fileName: string) => {
    const doc = new Document({
      sections: [
        {
          children: content.split("\n").map(
            (line) =>
              new Paragraph({
                text: line,
              })
          ),
        },
      ],
    });

    const buffer = await Packer.toBlob(doc);
    saveAs(buffer, fileName);
  };

  const downloadAsPdf = (content: string, fileName: string) => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(content, 180);
    doc.text(lines, 10, 10);
    doc.save(fileName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-xl font-semibold text-primary ml-4">
              AI CV & Cover Letter Generator
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Input Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-primary" />
                Enter Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Info */}
              <div className="space-y-4">
                <h3 className="font-semibold">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["fullName", "email", "phone", "location", "linkedIn"].map((field) => (
                    <div key={field}>
                      <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                      <Input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        value={formData.personalInfo[field as keyof typeof formData.personalInfo]}
                        onChange={(e) =>
                          handleInputChange("personalInfo", field, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Sections */}
              {["summary", "experience", "education", "skills", "achievements", "coverLetter"].map(
                (field) => (
                  <div key={field}>
                    <Label htmlFor={field}>
                      {field === "coverLetter"
                        ? "Cover Letter Notes"
                        : field.charAt(0).toUpperCase() + field.slice(1)}
                    </Label>
                    <Textarea
                      id={field}
                      value={formData[field as keyof typeof formData] as string}
                      onChange={(e) => handleInputChange("", field, e.target.value)}
                      placeholder={`Enter your ${field}...`}
                    />
                  </div>
                )
              )}

              <Button onClick={generateCV} className="w-full" disabled={isGenerating}>
                {isGenerating ? "Generating..." : "Generate AI CV & Cover Letter"}
              </Button>

              {/* CV Upload */}
              <div>
                <Label htmlFor="uploadCV">Upload Existing CVs</Label>
                <Input id="uploadCV" type="file" multiple onChange={handleCVUpload} />
                {uploadedCVs.length > 0 && (
                  <ul className="mt-2 text-sm text-gray-700">
                    {uploadedCVs.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Generated Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Generated Preview</span>
                {generatedCV && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsDocx(generatedCV, "AI-CV.docx")}
                    >
                      <Download className="w-4 h-4 mr-2" /> CV DOCX
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsPdf(generatedCV, "AI-CV.pdf")}
                    >
                      <Download className="w-4 h-4 mr-2" /> CV PDF
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsDocx(generatedCoverLetter, "AI-CoverLetter.docx")}
                    >
                      <Download className="w-4 h-4 mr-2" /> CL DOCX
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsPdf(generatedCoverLetter, "AI-CoverLetter.pdf")}
                    >
                      <Download className="w-4 h-4 mr-2" /> CL PDF
                    </Button>
                  </div>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {generatedCV ? (
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded border min-h-[300px]">
                    <pre className="whitespace-pre-wrap text-sm">{generatedCV}</pre>
                  </div>
                  <div className="bg-white p-6 rounded border min-h-[200px]">
                    <h4 className="font-semibold mb-2">Generated Cover Letter</h4>
                    <pre className="whitespace-pre-wrap text-sm">{generatedCoverLetter}</pre>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground py-12">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>
                    Fill out the form and click "Generate" to see your AI-enhanced CV & Cover
                    Letter
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CVGenerator;

