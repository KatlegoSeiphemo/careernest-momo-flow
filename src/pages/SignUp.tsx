import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    age: "",
    gender: "",
    location: "",
    qualification: "",
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (field === "password") {
      if (!isStrongPassword(value)) {
        setPasswordError(
          "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
        );
      } else {
        setPasswordError("");
      }
    }
  };

  const isStrongPassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return regex.test(password);
  };

  const sendVerificationCode = () => {
    if (!formData.email) {
      toast.error("Please enter an email first.");
      return;
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    setVerificationCode(code);
    setCodeSent(true);
    toast.success(`Verification code sent to ${formData.email} (Code: ${code})`);
  };

  const verifyCode = () => {
    if (enteredCode === verificationCode) {
      setIsEmailVerified(true);
      toast.success("Email verified successfully!");
    } else {
      toast.error("Invalid verification code. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isEmailVerified) {
      toast.error("Please verify your email first.");
      return;
    }

    if (!isStrongPassword(formData.password)) {
      toast.error(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    toast.success("Account created successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Join CareerNest</CardTitle>
          <CardDescription>
            Create your account to unlock personalized career guidance and opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Surname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">First Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  id="surname"
                  value={formData.surname}
                  onChange={(e) => handleInputChange("surname", e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email Verification */}
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  disabled={isEmailVerified}
                />
                {!isEmailVerified && (
                  <Button type="button" onClick={sendVerificationCode}>
                    Send Code
                  </Button>
                )}
              </div>
            </div>

            {codeSent && !isEmailVerified && (
              <div className="space-y-2">
                <Label htmlFor="verificationCode">Enter Verification Code</Label>
                <div className="flex gap-2">
                  <Input
                    id="verificationCode"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                  />
                  <Button type="button" onClick={verifyCode}>
                    Verify
                  </Button>
                </div>
              </div>
            )}

            {/* Password field only shows after email verification */}
            {isEmailVerified && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  required
                />
                {passwordError && <p className="text-sm text-red-600">{passwordError}</p>}
              </div>
            )}

            <Button type="submit" className="w-full" size="lg" disabled={!isEmailVerified}>
              Create Account
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
