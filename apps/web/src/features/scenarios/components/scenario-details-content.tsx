import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scenario } from '@/types/scenario';
import { Clock, CheckCircle2, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface ScenarioDetailsContentProps {
  scenario: Scenario;
}

export function ScenarioDetailsContent({
  scenario,
}: ScenarioDetailsContentProps) {
  const duration = `${scenario.durationMin}-${scenario.durationMax} min`;

  return (
    <div className="flex flex-col h-full">
      <div className="px-6 pt-6 space-y-4">
        <h2 className="text-2xl font-bold leading-tight">{scenario.title}</h2>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-sm font-medium">
            {scenario.difficulty}
          </Badge>
          {scenario.skills.slice(0, 2).map((skill) => (
            <Badge key={skill} variant="outline" className="text-sm">
              {skill}
            </Badge>
          ))}
          <Badge variant="outline" className="gap-1.5 text-sm">
            <Clock className="h-3.5 w-3.5" />
            {duration}
          </Badge>
        </div>

        {(scenario.completed || scenario.inProgress) && (
          <div className="flex gap-2">
            {scenario.completed && (
              <Badge
                variant="outline"
                className="gap-1.5 text-green-600 border-green-600"
              >
                <CheckCircle2 className="h-4 w-4" />
                Completed
              </Badge>
            )}
            {scenario.inProgress && (
              <Badge
                variant="outline"
                className="gap-1.5 text-blue-600 border-blue-600"
              >
                <PlayCircle className="h-4 w-4" />
                In Progress
              </Badge>
            )}
          </div>
        )}
      </div>

      <Separator className="my-6" />

      <ScrollArea className="flex-1 px-6">
        <div className="space-y-8 pb-6">
          <div>
            <h3 className="text-base font-semibold mb-3 text-foreground">
              Problem overview
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {scenario.problemOverview}
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3 text-foreground">
              Constraints
            </h3>
            <ul className="space-y-3">
              {scenario.constraints.map((constraint, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                >
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>{constraint}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-3 text-foreground">
              Stakeholders
            </h3>
            <ul className="space-y-3">
              {scenario.stakeholders.map((stakeholder, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                >
                  <span className="text-primary mt-0.5 font-bold">•</span>
                  <span>{stakeholder}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>

      <div className="border-t p-6 space-y-3 mt-auto">
        <Button className="w-full" size="lg" asChild>
          <Link href={`/workspace?scenario=${scenario.id}`}>
            Start new workspace
          </Link>
        </Button>
        <Button variant="outline" className="w-full" size="lg" asChild>
          <Link href={`/scenarios/${scenario.id}/preview`}>Preview brief</Link>
        </Button>
      </div>
    </div>
  );
}
