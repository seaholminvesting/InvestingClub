import { Card, CardContent } from "@/components/ui/card";
import { 
  Book, 
  Mail, 
  Users, 
  ClipboardList, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <Card className="bg-gray-50 rounded-lg shadow-md mb-8">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Club Information</h3>
          
          <div className="space-y-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <Book className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Meeting Schedule</h4>
                <p className="text-gray-600">Every Tuesday and Thursday, 3:30 PM - 5:00 PM</p>
                <p className="text-gray-600">Room 203, Main Building</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Email</h4>
                <p className="text-gray-600">investingclub@highschool.edu</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Faculty Advisor</h4>
                <p className="text-gray-600">Ms. Jennifer Anderson</p>
                <p className="text-gray-600">Economics Department</p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <ClipboardList className="h-6 w-6 text-primary" />
              </div>
              <div className="ml-3">
                <h4 className="text-lg font-medium text-gray-900">Club Officers</h4>
                <p className="text-gray-600">President: Michael Chen</p>
                <p className="text-gray-600">Vice President: Sophia Rodriguez</p>
                <p className="text-gray-600">Treasurer: James Wilson</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white rounded-lg shadow-md">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
          
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="bg-[#1877F2] hover:bg-[#0E5FC1] text-white rounded-full p-3 transition duration-150 ease-in-out"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="bg-[#1DA1F2] hover:bg-[#0B7CC1] text-white rounded-full p-3 transition duration-150 ease-in-out"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="bg-[#E4405F] hover:bg-[#D1294D] text-white rounded-full p-3 transition duration-150 ease-in-out"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="bg-[#0077B5] hover:bg-[#005885] text-white rounded-full p-3 transition duration-150 ease-in-out"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
