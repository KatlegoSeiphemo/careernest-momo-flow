import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  momoFeature: string;
  pricing?: string;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  momoFeature, 
  pricing,
  className 
}: FeatureCardProps) => {
  return (
    <Card className={`feature-card ${className}`}>
      <div className="flex items-start gap-4">
        <div className="bg-gradient-sunset p-3 rounded-lg flex-shrink-0">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg text-foreground">{title}</h3>
            <span className="momo-badge">MoMo</span>
          </div>
          <p className="text-muted-foreground text-sm mb-3">{description}</p>
          <div className="bg-gradient-growth/10 p-3 rounded-lg mb-3">
            <p className="text-sm font-medium text-earth-green">{momoFeature}</p>
          </div>
          {pricing && (
            <div className="text-xs text-muted-foreground font-medium">
              {pricing}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;