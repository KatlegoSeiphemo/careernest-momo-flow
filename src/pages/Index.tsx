import { 
  CreditCard, 
  Users, 
  Target, 
  Briefcase, 
  GraduationCap, 
  Wallet, 
  Gift, 
  Shield, 
  Heart,
  ChevronRight,
  Smartphone,
  TrendingUp,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Subscription Payments",
      description: "Students subscribe to Career Growth Bundles with affordable monthly plans",
      pricing: "Starting from R50/month"
    },
    {
      icon: Users,
      title: "Split Payments",
      description: "Instant commission distribution between students, CareerNest, and mentors",
      pricing: "Transparent 10% platform fee"
    },
    {
      icon: Heart,
      title: "Scholarship Crowdfunding",
      description: "Community-powered funding for learners' educational goals",
      pricing: "0% fees on donations"
    },
    {
      icon: Briefcase,
      title: "Job Application Services",
      description: "CV scoring, psychometric tests, and mock interviews",
      pricing: "R15-50 per service"
    },
    {
      icon: GraduationCap,
      title: "Pay-As-You-Learn",
      description: "Unlock lessons progressively without large upfront costs",
      pricing: "R10-25 per lesson"
    },
    {
      icon: Wallet,
      title: "Employer Payments",
      description: "Streamlined recruitment fee processing and candidate rewards",
      pricing: "Custom enterprise rates"
    },
    {
      icon: Target,
      title: "Savings & Goals",
      description: "Gamified savings system for educational investments",
      pricing: "Free goal tracking"
    },
    {
      icon: Gift,
      title: "Referral Rewards",
      description: "Instant cash rewards for successful referrals",
      pricing: "R25-100 per referral"
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Secure verification process to protect user identities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">CareerNest</h1>
                <p className="text-xs text-muted-foreground">Nest Your Ambitions, Grow Your Career</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-6d78-622f-82c2-048e798d5204/raw?se=2025-09-26T18%3A52%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=b08b1409-90c2-5b49-abcf-26b344a137da&skoid=e9d2f8b1-028a-4cff-8eb1-d0e66fbefcca&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-26T17%3A19%3A31Z&ske=2025-09-27T17%3A19%3A31Z&sks=b&skv=2024-08-04&sig=yorG0bJxu5Y2O8DrkEx5HUN1HkInBNN9%2BGfvUwI8Q%2BI%3D"   
            alt="African professionals using CareerNest platform"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Unlocking potential for smooth career journeys
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              CareerNest is a career development platform that helps students and early-career professionals discover, plan, and grow in their chosen fields
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="hero-button text-lg px-8 py-4" onClick={() => window.location.href = '/signup'}>
                Start Your Journey today!
                <Zap className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard value="150K+" label="Active Users" change="12% this month" />
            <StatsCard value="500+" label="Expert Mentors" change="8% this month" />
            <StatsCard value="100+" label="Communities" change="25% this month" />
            <StatsCard value="98%" label=" Success Rate" change="2% improvement" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-growth/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-earth-green" />
              <span className="text-earth-green font-medium">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revolutionary Career Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless career growth that makes professional development affordable and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                pricing={feature.pricing}
                className="animate-float"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
     <section className="py-20 bg-gradient-hero relative overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
    
    {/* Text Content */}
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Ready to Transform Your Career?
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl">
        Join thousands of professionals already growing their careers with CareerNest.
      </p>
      <Button 
        className="hero-button text-lg px-8 py-4 animate-pulse-glow"
        onClick={() => window.location.href = '/signup'}
      >
        Launch Your Career Journey
        <ChevronRight className="h-5 w-5 ml-2" />
      </Button>
    </div>

    {/* Image */}
    <div className="md:w-1/2">
      <img 
        src= "data:image/webp;base64,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"  alt="Career Growth" 
        className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-xl"
      />
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-deep-brown text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-sunset rounded-lg flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CareerNest</span>
          </div>
          <p className="text-white/80 mb-4">
            Empowering you to reach your full potential
          </p>
          <div className="flex justify-center gap-4 text-sm text-white/60">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
