import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { 
  Trophy, 
  Star, 
  Calendar, 
  Zap, 
  Target, 
  Gift, 
  ArrowLeft,
  Flame,
  Award,
  Crown
} from "lucide-react";

const Rewards = () => {
  const navigate = useNavigate();

  const userStats = {
    totalLogins: 47,
    currentStreak: 12,
    totalPoints: 2340,
    level: 5,
    nextLevelPoints: 2500,
    badges: 8
  };

  const badges = [
    {
      id: 1,
      name: "Early Bird",
      description: "Logged in before 8 AM for 5 consecutive days",
      icon: Calendar,
      color: "bg-yellow-500",
      earned: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      name: "Community Builder",
      description: "Joined 3 different communities",
      icon: Star,
      color: "bg-blue-500",
      earned: true,
      date: "2024-01-20"
    },
    {
      id: 3,
      name: "Streak Master",
      description: "Maintained 10-day login streak",
      icon: Flame,
      color: "bg-red-500",
      earned: true,
      date: "2024-01-25"
    },
    {
      id: 4,
      name: "Career Explorer",
      description: "Completed career assessment",
      icon: Target,
      color: "bg-green-500",
      earned: true,
      date: "2024-01-18"
    },
    {
      id: 5,
      name: "Content Creator",
      description: "Generated 5 CVs and cover letters",
      icon: Award,
      color: "bg-purple-500",
      earned: false,
      date: null
    },
    {
      id: 6,
      name: "VIP Member",
      description: "Reach level 10",
      icon: Crown,
      color: "bg-orange-500",
      earned: false,
      date: null
    }
  ];

  const recentActivity = [
    { date: "Today", points: 50, activity: "Daily login bonus" },
    { date: "Yesterday", points: 25, activity: "Used CV Generator" },
    { date: "2 days ago", points: 30, activity: "Joined new community" },
    { date: "3 days ago", points: 50, activity: "Daily login bonus" },
    { date: "4 days ago", points: 20, activity: "Completed career assessment" }
  ];

  const levelProgress = ((userStats.totalPoints % 500) / 500) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-primary">Rewards Hub</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Trophy className="w-4 h-4 mr-1" />
              Level {userStats.level}
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Total Points</p>
                  <p className="text-3xl font-bold">{userStats.totalPoints.toLocaleString()}</p>
                </div>
                <Zap className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Current Streak</p>
                  <p className="text-3xl font-bold">{userStats.currentStreak} days</p>
                </div>
                <Flame className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Total Logins</p>
                  <p className="text-3xl font-bold">{userStats.totalLogins}</p>
                </div>
                <Calendar className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Badges Earned</p>
                  <p className="text-3xl font-bold">{userStats.badges}</p>
                </div>
                <Trophy className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Level Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Level Progress</span>
              </CardTitle>
              <CardDescription>
                Keep logging in to earn more points and level up!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Level {userStats.level}</span>
                  <span className="text-sm text-gray-500">Level {userStats.level + 1}</span>
                </div>
                <Progress value={levelProgress} className="h-3" />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{userStats.totalPoints} points</span>
                  <span>{userStats.nextLevelPoints} points needed</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Next Level Rewards:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 100 bonus points</li>
                    <li>• Exclusive badge: "Rising Star"</li>
                    <li>• Early access to new features</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="w-5 h-5" />
                <span>Recent Activity</span>
              </CardTitle>
              <CardDescription>
                Your latest point-earning activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="text-sm font-medium">{activity.activity}</p>
                      <p className="text-xs text-gray-500">{activity.date}</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      +{activity.points} pts
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Badges Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="w-5 h-5" />
              <span>Achievement Badges</span>
            </CardTitle>
            <CardDescription>
              Collect badges by completing various activities and milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`p-4 rounded-lg border-2 transition-all ${
                    badge.earned 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-2 rounded-full ${badge.color} ${!badge.earned && 'grayscale'}`}>
                      <badge.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{badge.name}</h4>
                      {badge.earned && badge.date && (
                        <p className="text-xs text-green-600">Earned on {badge.date}</p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{badge.description}</p>
                  {badge.earned && (
                    <Badge variant="secondary" className="mt-2 bg-green-100 text-green-800">
                      <Star className="w-3 h-3 mr-1" />
                      Earned
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Redeemable Rewards */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span>Redeem Your Rewards</
