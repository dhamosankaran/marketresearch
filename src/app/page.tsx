'use client'

import { useState } from 'react'
import { useCompletion } from 'ai/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { ResearchResults } from '@/components/ResearchResults'
import { Loader2 } from 'lucide-react'

export default function MarketResearchPage() {
  const [productName, setProductName] = useState('')
  const [context, setContext] = useState('')
  
  const { complete, completion, isLoading } = useCompletion({
    api: '/api/openai/chat',
    onResponse: (response) => {
      console.log('Receiving stream:', response)
    },
    onFinish: (completion) => {
      console.log('Finished:', completion)
    },
  })

  const handleSubmit = async () => {
    if (!productName || !context) return
    await complete(`Product/Service: ${productName}\nContext: ${context}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border-0 shadow-lg bg-white/50 backdrop-blur-sm">
          <CardHeader className="pb-2 pt-6 px-6">
            <CardTitle className="text-3xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
              AI Market Research System
            </CardTitle>
            <CardDescription className="text-slate-500">
              Enter product details to begin comprehensive multi-agent analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Product/Service Name</label>
              <Input
                placeholder="e.g., Tesla Model 3, Spotify Premium"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="border-slate-200 focus:border-slate-300 focus:ring-slate-200"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Analysis Context</label>
              <Textarea
                placeholder="Provide context about the product/service and specific areas you'd like to analyze..."
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="min-h-[100px] border-slate-200 focus:border-slate-300 focus:ring-slate-200"
              />
            </div>
            <Button 
              onClick={handleSubmit} 
              className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white shadow-lg"
              disabled={isLoading || !productName || !context}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Start Analysis'
              )}
            </Button>
          </CardContent>
        </Card>

        {completion && <ResearchResults content={completion} />}
      </div>
    </main>
  )
}
