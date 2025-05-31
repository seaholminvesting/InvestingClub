import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Resource } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

import InvestorCenter from "../../public/InvestorCenter.jpg";
import NewMoney from "../../public/NewMoney.jpg";
import SwedishInvestor from "../../public/SwedishInvestor.jpg";
import ChrisInvests from "../../public/ChrisInvests.jpg";
import DamienTalksMoney from "../../public/DamienTalksMoney.jpg";
import BenFelix from "../../public/BenFelix.jpg";

import Investopedia from "../../public/Investopedia.jpg";
import CNBC from "../../public/CNBC.webp";
import SeekingAlpha from "../../public/SeekingAlpha.png";
import Barrons from "../../public/Barrons.png";
import SimplyWallSt from "../../public/SimplyWallSt.jpg";
import MotleyFool from "../../public/MotleyFool.webp";
import Morningstar from "../../public/Morningstar.webp";
import Zacks from "../../public/Zacks.png";
import TipRanks from "../../public/TipRanks.jpg";

import MostImportant from "../../public/MostImportant.jpg";
import OneUp from "../../public/OneUp.jpg";
import RandomWalk from "../../public/RandomWalk.jpg";
import CommonUncommon from "../../public/CommonUncommon.jpg";
import BlackSwan from "../../public/BlackSwan.jpg";
import Dhando from "../../public/Dhando.jpg";
import Fooled from "../../public/Fooled.jpg";
import Antifragile from "../../public/Antifragile.jpg";
import PoorCharlie from "../../public/PoorCharlie.jpg";

const resources: Resource[] = [
  {
    id: 1,
    title: "Investor Center",
    image: InvestorCenter,
    category: "channel",
    link: "https://www.youtube.com/@InvestorCenter"
  },
  {
    id: 2,
    title: "New Money",
    image: NewMoney,
    category: "channel",
    link: "https://www.youtube.com/@NewMoneyYouTube"
  },
  {
    id: 3,
    title: "Swedish Investor",
    image: SwedishInvestor,
    category: "channel",
    link: "https://www.youtube.com/@TheSwedishInvestor"
  },
  {
    id: 4,
    title: "Chris Invests",
    image: ChrisInvests,
    category: "channel",
    link: "https://www.youtube.com/@ChrisInvests"
  },
  {
    id: 5,
    title: "Damien Talks Money",
    image: DamienTalksMoney,
    category: "channel",
    link: "https://www.youtube.com/@DamienTalksMoney"
  },
  {
    id: 6,
    title: "Ben Felix",
    image: BenFelix,
    category: "channel",
    link: "https://www.youtube.com/@BenFelixCSI"
  },
  {
    id: 7,
    title: "Investopedia",
    image: Investopedia,
    category: "website",
    link: "https://www.investopedia.com/"
  },
  {
    id: 8,
    title: "CNBC",
    image: CNBC,
    category: "website",
    link: "https://www.cnbc.com/"
  },
  {
    id: 9,
    title: "Seeking Alpha",
    image: SeekingAlpha,
    category: "website",
    link: "https://seekingalpha.com/"
  },
  {
    id: 10,
    title: "Barrons",
    image: Barrons,
    category: "website",
    link: "https://www.barrons.com/"
  },
  {
    id: 11,
    title: "Simply Wall Street",
    image: SimplyWallSt,
    category: "website",
    link: "https://simplywall.st/"
  },
  {
    id: 12,
    title: "The Motley Fool",
    image: MotleyFool,
    category: "website",
    link: "https://www.fool.com/"
  },
  {
    id: 13,
    title: "Morningstar",
    image: Morningstar,
    category: "website",
    link: "https://www.morningstar.com/"
  },
  {
    id: 14,
    title: "Zacks",
    image: Zacks,
    category: "website",
    link: "https://www.zacks.com/"
  },
  {
    id: 15,
    title: "TipRanks",
    image: TipRanks,
    category: "website",
    link: "https://www.tipranks.com/"
  },
  {
    id: 16,
    title: "The Most Important Thing",
    image: MostImportant,
    category: "book",
    link: "https://www.amazon.com/most-important-thing-Howard-Marks/dp/9353022797/ref=tmm_pap_swatch_0"
  },
  {
    id: 17,
    title: "One Up On Wall Street",
    image: OneUp,
    category: "book",
    link: "https://www.amazon.com/One-Up-Wall-Street-Already/dp/0743200403/ref=sr_1_1?crid=1FYQ5VWJ3AM4L&dib=eyJ2IjoiMSJ9.8EUf2jZ0SXgZ9Zxzv5uOBIpILjGauKkInytckFtT0M3lT_gDS1MynBwy-jH4O3ti2nDM0bWm06gyfotejXPaJxIFWP7cddbKC6ynO6fBgXdkhVpFHm2ibKLpoYN9mW8_PnPVHmQnSkVxh0E3Me57yH6dC_7NU26S4FAFfJ7lk4-AD8W_1QHlCHg6N2gwyYL7bifmE-B1EMIOpGMWSSOqmwVtVcWWsLUTQnjHTjaqQFs.i-OFVxy8e7fBHfgYfC4FtnYs-4bin7xIgg40IC0agjE&dib_tag=se&keywords=one+up+on+wall+street&qid=1748124470&s=books&sprefix=one+up+on+wall+stree%2Cstripbooks%2C86&sr=1-1"
  },
  {
    id: 18,
    title: "Random Walk Down Wall Street",
    image: RandomWalk,
    category: "book",
    link: "https://www.amazon.com/Random-Walk-Down-Wall-Street/dp/1324035439/ref=sr_1_1?crid=3TU0E30Q4G0CM&dib=eyJ2IjoiMSJ9.Q_in3kdh8y-uXHbz63xwv2EnS66bXb29c4Dm5gbEwer8n_UfMJA9cGQAzCKQKiKtJl0wFC3VA3X6n_34_4hOLKDM1LQi06SRvtF6EVG6VNWSY72-hAck98Yp0Z0V9IdyPNCaD-ZUorB8BXLq8Xrs7_rp4bHN-Zw2jYbXXuuwCAOeAMaATY8hFhz2XD33X286s92O_nvt-K56PPN8P_OE2apzuEySiV66swxMhAVAWFg.ID6YXCJq-4nUOEfTg33rZJ8nR1RBqqdIGeZLRKdYDFU&dib_tag=se&keywords=random+walk+down+wall+street&qid=1748124589&s=books&sprefix=random+walk+down+wall+street%2Cstripbooks%2C79&sr=1-1"
  },
  {
    id: 19,
    title: "Common Stocks and Uncommon Profits",
    image: CommonUncommon,
    category: "book",
    link: "https://www.amazon.com/Common-Stocks-Uncommon-Profits-Writings/dp/0471445509/ref=sr_1_1?crid=20IBMDH8TFYJX&dib=eyJ2IjoiMSJ9.bRjG2ezTJW0wcKPVZaNje8Xtd2cL89CTWXX6wEW8sx4vC6NlFEfao46t4mSOxdYlLalkggxXSkiYiAaLZd1P0O3KLD6VOvIBizvpTqE76t14yD4d59mspfhltLmK-Q0BjhliGkBZiYAxAQLp65RIpqcelO0Qrx2Ji3TT_uHanGYIeHo80cKEAwKIY8U4kWlvvC8f65edN-Hzz6BHuM3uGpVfVk5KYAwXD8xi_tt4aW4.peNwl-yEWv7e_HDPu0xvVDWxGUUUrlN1Fs--P17DQu8&dib_tag=se&keywords=common+stocks+and+uncommon+profits&qid=1748124615&s=books&sprefix=common+stocks+and+uncommon+profit%2Cstripbooks%2C77&sr=1-1"
  },
  {
    id: 20,
    title: "The Black Swan",
    image: BlackSwan,
    category: "book",
    link: "https://www.amazon.com/Black-Swan-Improbable-Robustness-Fragility/dp/081297381X/ref=sr_1_1?crid=2V0FX8JZZ48NA&dib=eyJ2IjoiMSJ9.ROcwTqpLNFvPrfdMSYUVrG-cbovn0MMYkmZAVcwJoCuC9m0e1jka835FJnyFiW05_fiFVJZjlTLoIfMSCveYJIXFhhRhNpwajOZiTYHPtqKLKIhgAP4a2gL5Xc5VlWNln9a8idfuaQpTJPBNQ9-hLYPUkA1LOjKlDv8TAW9YdOhW4lO5nOx-QRp53FZAf_OipvUVcYRjD6yeWpWfUEZOBnYaPgMSHkfmUggX-3SEGis.dnnONUIHfO9umVUWcS5UqhFSeN4XnyTPODJYFZpQQjw&dib_tag=se&keywords=black+swan&qid=1748124639&s=books&sprefix=black+swan%2Cstripbooks%2C85&sr=1-1"
  },
  {
    id: 21,
    title: "The Dhando Investor",
    image: Dhando,
    category: "book",
    link: "amazon.com/Dhandho-Investor-Low-Risk-Method-Returns/dp/047004389X/ref=sr_1_1?crid=13L3BM1C1C6GD&dib=eyJ2IjoiMSJ9.FQkI-gcbAZEYQyB2CReMRN9SJOw_1TUp7MqlNA98mjcvQn0V0lkiQT_Bhe_rIdArjSEeYa_0Op5ZNfzyCtcYH-OBmA2gWqvDrUbxLz2FVfrqy26MIiiU7JkrCsY-IHH6VYL2X3oE8rGricV6hZF1B9IG6jw7rYqhwEVzeqHPV8-mLpy0V6450FsO6Fdt0ZKFUlfkO89h_GjxYCasS9MRJfbvcgZ3meeaeVf4Ipnm9Yo.Lz3eanehDYSSvcMGIbKuaj_7FRf9JL_m2H_VSnCsPLQ&dib_tag=se&keywords=the+dhandho+investor&qid=1748124661&s=books&sprefix=the+dhando+investo%2Cstripbooks%2C87&sr=1-1"
  },
  {
    id: 22,
    title: "Fooled by Randomness",
    image: Fooled,
    category: "book",
    link: "https://www.amazon.com/Fooled-Randomness-Hidden-Markets-Incerto/dp/1400067936/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.uRAw1vv32QLCq1xOlyJTlKHTpp-5bGXZ5sax7iauGcbkOZumwudr8yV3Cx87OorTmT76B7POLZm8Mek66B45iEioe2fSaBhqNcxD7LJNM7_9d9xiZzL4GhNjs6vOFefB7qJNqjqxs5cgWhztt3viezXxMX5MpigPlnvCgcp5hMiTZESHVFUh-Djcj0lfxeHLREQcnk8sIT3lg8vnPQCkNMssQXl4HxXw7EnMVrDSaX8.U6FstVXWs_0beQAgofkfTkCLo-hSVPn23bQBpc3xt3E&qid=1748124687&sr=1-1"
  },
  {
    id: 23,
    title: "Antifragile",
    image: Antifragile,
    category: "book",
    link: "https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.C3e4IagEiQHRzgC0W8S0Klx6_qWnqFJ-2K-ZBPbsL4-4rOsDRDDadA6BfUT0bHbD1jDzChNNe8oHEx9rj61Iqfn0of18cjyvjdITTImD4z0TmBr9sB4Ml4iNQv4WFmIWDEQnjJx-ueONc6Y6w5ffgAMPMN_HMPktbrXeRV7aReftjqeA94sywyqHmAmbXBW2XEhc-MHmtip765XoGyty3j4a1Qaqiuu_UiW6BDgvbD4.cigrkI5NGMGTG8OFh2IFrUDU6rSbXwg-ITLnzRTbLy8&qid=1748124719&sr=1-1"
  },
  {
    id: 24,
    title: "Poor Charlie's Almanack",
    image: PoorCharlie,
    category: "book",
    link: "https://www.amazon.com/Poor-Charlies-Almanack-Essential-Charles/dp/1953953239/ref=tmm_hrd_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.vg5pUX_jT-eNweisJvvTB8czEa-G90gumz_d7JFPBiRHYhN2ARt9gj3aLN5zc5OCt0vvgcKMQjfZkY1U8Tky9wAFb2ART3h90jkj6gyDMUy-tIo12RzIE0qg-0VprkgmSnQ9On1Kqo2SjnifIw2YiIXo6UiY6dab7_NyeG3ziaNh16wjkwim4HS92TxqTYfavb12xGNeizZCFYWrznoGYQJc8admvw0kFDwPo6-_uVU.mdixDX2LDNHRjd9H02H9p5oEitjVJIcEliYgfQHsuO4&qid=1748124755&sr=1-1"
  }
];

const ResourceList = () => {
  const [activeTab, setActiveTab] = useState("all");

  const shuffleArray = (array: Resource[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };
  
  const filteredResources = activeTab === "all"
  ? shuffleArray(resources)
  : resources.filter(resource => resource.category === activeTab);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Financial Education Resources</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Access our curated collection of resources to enhance your financial knowledge and investing skills.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
        <div className="bg-gray-50 py-4 rounded-t-lg px-4">
          <TabsList className="flex flex-wrap justify-center mx-auto max-w-3xl border-b border-gray-200 w-full">
            <TabsTrigger value="all" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              All Resources
            </TabsTrigger>
            <TabsTrigger value="website" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              Websites
            </TabsTrigger>
            <TabsTrigger value="book" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              Books
            </TabsTrigger>
            <TabsTrigger value="channel" className="px-3 py-2 font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary">
              YouTube and Media
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value={activeTab} className="mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition duration-300 hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge 
                      variant="outline" 
                      className={`px-2.5 py-0.5 rounded-full ${
                        resource.category === 'website' 
                          ? 'bg-primary-50 text-primary border-primary-100' 
                          : resource.category === 'book' 
                          ? 'bg-secondary-50 text-secondary border-secondary-100' 
                          : 'bg-accent-50 text-accent border-accent-100'
                      }`}
                    >
                      {resource.category === 'website' ? 'Website' : 
                       resource.category === 'book' ? 'Book' : 'Channel'}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <a 
                    href={resource.link} 
                    className="text-primary hover:text-primary/90 font-medium inline-flex items-center"
                    target="_blank"
                  >
                    {resource.category === 'channel' ? (
                      <>
                        Go to Channel
                        <Play className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Investment Terms Glossary</h3>
            <p className="text-gray-600">
              Download our comprehensive glossary of investment terms to help you navigate financial jargon with confidence.
            </p>
          </div>
          <a href="/Investing-Terms.pdf" download>
            <Button className="flex-shrink-0 bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              Download PDF
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
