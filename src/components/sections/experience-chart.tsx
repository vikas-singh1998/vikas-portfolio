import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const deliveryData = [
  { period: "2021", impact: 62 },
  { period: "2022", impact: 74 },
  { period: "2023", impact: 83 },
  { period: "2024", impact: 91 },
  { period: "2025", impact: 97 },
];

export function ExperienceChart() {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Delivery Momentum
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Consistent growth across product ownership, frontend quality, and delivery impact
          </h3>
        </div>
        <div className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={deliveryData}>
              <defs>
                <linearGradient id="impactGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="period" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  background: "hsl(var(--card))",
                  borderRadius: 16,
                  border: "1px solid hsl(var(--border))",
                }}
              />
              <Area
                type="monotone"
                dataKey="impact"
                stroke="hsl(var(--accent))"
                strokeWidth={3}
                fill="url(#impactGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
