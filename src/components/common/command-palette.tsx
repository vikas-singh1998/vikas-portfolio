import { FileDown, FolderKanban, Home, Mail, NotebookTabs, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useCommandMenu } from "@/hooks/use-command-menu";

const navigationItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: UserRound },
  { label: "Projects", path: "/projects", icon: FolderKanban },
  { label: "Blog", path: "/blog", icon: NotebookTabs },
  { label: "Contact", path: "/contact", icon: Mail },
];

export function CommandPalette() {
  const navigate = useNavigate();
  const { open, setOpen } = useCommandMenu();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a page, project, or action..." />
      <CommandList>
        <CommandEmpty>No matching result.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.path}
              onSelect={() => {
                navigate(item.path);
                setOpen(false);
              }}
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Actions">
          <CommandItem
            onSelect={() => {
              window.open("/resume.pdf", "_blank", "noopener,noreferrer");
              setOpen(false);
            }}
          >
            <FileDown className="h-4 w-4 text-muted-foreground" />
            <span>Download Resume</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
