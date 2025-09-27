import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

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
    password: ""
  });

  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Live password validation
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isStrongPassword(formData.password)) {
      toast.error(
        "Password must be at least 8 characters long, include uppercase, lowercase, number, and special character."
      );
      return;
    }

    // Sign up using Supabase with email verification
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
          surname: formData.surname,
          age: formData.age,
          gender: formData.gender,
          location: formData.location,
          qualification: formData.qualification,
        },
        emailRedirectTo: 'https://yourapp.com/verify-email' // Redirect after verification
      }
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created! Please check your email to verify your account.");
      navigate("/signin");
    }
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label>Gender</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="City, Country"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Highest Academic Qualification</Label>
              <Select onValueChange={(value) => handleInputChange("qualification", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="matric">Matric/Grade 12</SelectItem>
                  <SelectItem value="diploma">Diploma</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="honours">Honours Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD/Doctorate</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                required
              />
              {passwordError && (
                <p className="text-sm text-red-600">{passwordError}</p>
              )}
            </div>

            <Button type="submit" className="w-full" size="lg">
              Create Account
            </Button>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Button variant="link" className="p-0" onClick={() => navigate("/signin")}>
                  Sign in here
                </Button>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
