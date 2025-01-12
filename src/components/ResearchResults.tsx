import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import ReactMarkdown from 'react-markdown'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'

export function ResearchResults({ content }: { content: string }) {
  const parseContent = (content: string) => {
    const sections = content.split('##').filter(Boolean)
    const parsedSections: Record<string, string> = {}
    sections.forEach(section => {
      const lines = section.trim().split('\n')
      const title = lines[0].trim().toLowerCase()
      if (title.includes('research manager')) parsedSections['manager'] = lines.slice(1).join('\n')
      if (title.includes('market analyst')) parsedSections['market'] = lines.slice(1).join('\n')
      if (title.includes('consumer expert')) parsedSections['consumer'] = lines.slice(1).join('\n')
      if (title.includes('industry specialist')) parsedSections['industry'] = lines.slice(1).join('\n')
    })
    return parsedSections
  }

  const sections = parseContent(content)

  const agents = [
    {
      id: 'manager',
      title: 'Research Manager',
      description: 'Strategy & Coordination',
      icon: '📊',
      color: 'from-blue-50/80 to-white',
      borderColor: 'border-blue-100'
    },
    {
      id: 'market',
      title: 'Market Analyst',
      description: 'Trends & Competition',
      icon: '📈',
      color: 'from-emerald-50/80 to-white',
      borderColor: 'border-emerald-100'
    },
    {
      id: 'consumer',
      title: 'Consumer Expert',
      description: 'Behavior & Segments',
      icon: '👥',
      color: 'from-violet-50/80 to-white',
      borderColor: 'border-violet-100'
    },
    {
      id: 'industry',
      title: 'Industry Specialist',
      description: 'Technical Analysis',
      icon: '🔍',
      color: 'from-amber-50/80 to-white',
      borderColor: 'border-amber-100'
    }
  ]

  return (
    <Card className="mt-6 border border-slate-200 shadow-lg bg-white">
      <CardContent className="p-6">
        <Tabs defaultValue="manager" className="w-full">
          <TabsList className="inline-flex h-14 items-center justify-center rounded-lg bg-slate-100/80 p-1 mb-6">
            {agents.map(agent => (
              <TabsTrigger 
                key={agent.id} 
                value={agent.id}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all"
              >
                <span className="text-xl">{agent.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-sm">{agent.title}</div>
                  <div className="text-xs text-slate-500">{agent.description}</div>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>

          {agents.map(agent => (
            <TabsContent key={agent.id} value={agent.id}>
              <div className={`rounded-lg bg-gradient-to-b ${agent.color} p-6 border ${agent.borderColor}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{agent.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{agent.title}</h3>
                    <p className="text-sm text-slate-500">{agent.description}</p>
                  </div>
                </div>
                <Separator className="mb-4" />
                <div className="prose prose-slate max-w-none">
                  <ReactMarkdown 
                    className="leading-relaxed [&>h3]:text-base [&>h3]:font-semibold [&>h3]:mt-4 [&>h3]:mb-2 
                              [&>p]:mt-0 [&>ul]:mt-2 [&>ul]:space-y-1 [&>ul]:list-disc [&>ul]:pl-4"
                  >
                    {sections[agent.id] || 'Analysis in progress...'}
                  </ReactMarkdown>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
} 