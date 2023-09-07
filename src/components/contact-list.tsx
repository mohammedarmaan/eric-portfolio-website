import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-yellow-500 hover:bg-yellow-600",
    href: "mailto:tarot1754443943@gmail.com",
    icon: faEnvelope,
  },

  {
    name: "X",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://twitter.com/erich2s",
    icon: faXTwitter,
  },
  {
    name: "Github",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://github.com/erich2s",
    icon: faGithub,
  },
  {
    name: "Instagram",
    className: "bg-pink-500 hover:bg-pink-600",
    href: "https://instagram.com/eric.h2s/",
    icon: faInstagram,
  },
  {
    name: "TikTok",
    className: "bg-black hover:bg-gray-800/90",
    href: "https://tiktok.com/@eric_h2s",
    icon: faTiktok,
  },
];
export default function ContactList({
  delayOffset = 0,
}: {
  delayOffset?: number;
}) {
  return (
    <MotionList delayOffset={delayOffset}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
              >
                <a href={contact.href} target="_blank">
                  <FontAwesomeIcon icon={contact.icon} className="w-fit" />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
