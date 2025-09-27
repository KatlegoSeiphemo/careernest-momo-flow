import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // ✅ Added from Mentorship
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Heart, 
  Code, 
  Briefcase, 
  Camera, 
  Music, 
  ArrowLeft, 
  Star, 
  Award, 
  Calendar, 
  MessageCircle, 
  Video, 
  CheckCircle 
} from "lucide-react"; // ✅ Added full icon set from Mentorship

const Communities = () => {
  const navigate = useNavigate();

  const communities = [
    {
      id: 1,
      name: "Software Developers",
      description: "Connect with fellow programmers and share coding experiences",
      members: 1247,
      category: "Technology",
      icon: Code,
      color: "bg-blue-500",
      posts: 342,
      isJoined: true
    },
    {
      id: 2,
      name: "Healthcare Heroes",
      description: "Medical professionals supporting each other's career growth",
      members: 892,
      category: "Healthcare",
      icon: Heart,
      color: "bg-red-500",
      posts: 156,
      isJoined: false
    },
    {
      id: 3,
      name: "Business Leaders",
      description: "Entrepreneurs and executives sharing business insights",
      members: 654,
      category: "Business",
      icon: Briefcase,
      color: "bg-green-500",
      posts: 289,
      isJoined: true
    },
    {
      id: 4,
      name: "Creative Photographers",
      description: "Visual storytellers and photography enthusiasts",
      members: 1089,
      category: "Creative",
      icon: Camera,
      color: "bg-purple-500",
      posts: 445,
      isJoined: false
    },
    {
      id: 5,
      name: "Music Producers",
      description: "Sound engineers and music creators collaborating",
      members: 743,
      category: "Entertainment",
      icon: Music,
      color: "bg-orange-500",
      posts: 198,
      isJoined: false
    },
    {
      id: 6,
      name: "Teaching Community",
      description: "Educators sharing resources and teaching strategies",
      members: 956,
      category: "Education",
      icon: Users,
      color: "bg-teal-500",
      posts: 267,
      isJoined: true
    }
  ];

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
              <h1 className="text-2xl font-bold text-primary">Communities</h1>
            </div>
            <Badge variant="secondary" className="text-sm">
              <Users className="w-4 h-4 mr-1" />
              6 Communities Available
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Career Communities</h2>
          <p className="text-lg text-gray-600">
            Connect with professionals who share your passions and career interests
          </p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Card key={community.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${community.color}`}>
                      <community.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {community.category}
                      </Badge>
                    </div>
                  </div>
                  {community.isJoined && (
                    <Badge variant="default" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      Joined
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm mb-4">
                  {community.description}
                </CardDescription>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{community.members.toLocaleString()} members</span>
                  <span>{community.posts} posts</span>
                </div>

                <Button 
                  className="w-full" 
                  variant={community.isJoined ? "outline" : "default"}
                >
                  {community.isJoined ? "View Community" : "Join Community"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* My Communities Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">My Communities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communities.filter(c => c.isJoined).map((community) => (
              <Card key={community.id} className="bg-white border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${community.color}`}>
                      <community.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium">{community.name}</h4>
                      <p className="text-sm text-gray-500">{community.members} members</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Communities;
