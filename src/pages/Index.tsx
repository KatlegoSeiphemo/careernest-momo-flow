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
import { Card } from "@/components/ui/card";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";
import heroImage from "@/assets/career-hero.jpg";

const Index = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Subscription Payments",
      description: "Students subscribe to Career Growth Bundles with affordable monthly plans",
      momoFeature: "MoMo auto-debits small monthly amounts for continuous learning access",
      pricing: "Starting from R50/month"
    },
    {
      icon: Users,
      title: "Split Payments",
      description: "Instant commission distribution between students, CareerNest, and mentors",
      momoFeature: "10% to CareerNest, 90% instantly to course providers via MoMo Collections",
      pricing: "Transparent 10% platform fee"
    },
    {
      icon: Heart,
      title: "Scholarship Crowdfunding",
      description: "Community-powered funding for learners' educational goals",
      momoFeature: "Direct MoMo wallet contributions with real-time progress tracking",
      pricing: "0% fees on donations"
    },
    {
      icon: Briefcase,
      title: "Job Application Services",
      description: "CV scoring, psychometric tests, and mock interviews",
      momoFeature: "Micro-MoMo payments for instant access to career services",
      pricing: "R15-50 per service"
    },
    {
      icon: GraduationCap,
      title: "Pay-As-You-Learn",
      description: "Unlock lessons progressively without large upfront costs",
      momoFeature: "MoMo micro-transactions for flexible, barrier-free learning",
      pricing: "R10-25 per lesson"
    },
    {
      icon: Wallet,
      title: "Employer Payments",
      description: "Streamlined recruitment fee processing and candidate rewards",
      momoFeature: "Auto-disbursement to successful candidates' MoMo wallets",
      pricing: "Custom enterprise rates"
    },
    {
      icon: Target,
      title: "Savings & Goals",
      description: "Gamified savings system for educational investments",
      momoFeature: "Integrated MoMo savings wallets with progress tracking",
      pricing: "Free goal tracking"
    },
    {
      icon: Gift,
      title: "Referral Rewards",
      description: "Instant cash rewards for successful referrals",
      momoFeature: "Immediate MoMo transfers via API disbursement",
      pricing: "R25-100 per referral"
    },
    {
      icon: Shield,
      title: "Identity Verification",
      description: "Secure, trusted profiles using MoMo KYC integration",
      momoFeature: "Streamlined sign-up with MoMo's verified identity data",
      pricing: "Free with MoMo wallet"
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
                <p className="text-xs text-muted-foreground">MoMo-Powered Career Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="momo-badge">MoMo Integrated</span>
              <Button className="hero-button" onClick={() => window.location.href = '/signup'}>
                Get Started <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="African professionals using CareerNest platform"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Empowering African Careers with
              <span className="block bg-gradient-to-r from-golden-yellow to-white bg-clip-text text-transparent">
                MoMo Integration
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              From micro-subscriptions to instant payments, CareerNest uses Mobile Money to make career growth accessible for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button className="hero-button text-lg px-8 py-4" onClick={() => window.location.href = '/signup'}>
                Start Your Journey
                <Zap className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCard value="15K+" label="Active Learners" change="12% this month" />
            <StatsCard value="500+" label="Expert Mentors" change="8% this month" />
            <StatsCard value="R2.3M" label="Paid to Learners" change="25% this month" />
            <StatsCard value="98%" label="MoMo Success Rate" change="2% improvement" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-growth/10 px-4 py-2 rounded-full mb-4">
              <TrendingUp className="h-4 w-4 text-earth-green" />
              <span className="text-earth-green font-medium">MoMo-Powered Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Revolutionary Career Platform Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience seamless career growth with our innovative MoMo integration that makes professional development affordable and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                momoFeature={feature.momoFeature}
                pricing={feature.pricing}
                className="animate-float"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of African professionals already growing their careers with CareerNest's MoMo-powered platform.
          </p>
          <Button className="hero-button text-lg px-8 py-4 animate-pulse-glow" onClick={() => window.location.href = '/signup'}>
            Launch Your Career Journey
            <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
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
            Empowering African careers through innovative MoMo integration
          </p>
          <div className="flex justify-center gap-4 text-sm text-white/60">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
            <span>•</span>
            <span>MoMo Partnership</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;