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
        src="data:image/webp;base64,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" 
        alt="Career Growth" 
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
