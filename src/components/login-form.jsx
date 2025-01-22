"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LoginPage() {
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-[480px] p-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <div className="relative w-32 h-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tcn%203-9uXZfi5NlELhCWHObpO0uFVNyKS7b4.png"
              alt="TCN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Welcome Text */}
          <div className="text-center space-y-2">
            <h1 className="text-[32px] font-bold text-[#1a365d]">Welcome</h1>
            <p className="text-gray-600">Enter your email and password to access your account</p>
          </div>

          {/* Login Form */}
          <form className="w-full space-y-6">
            <div className="space-y-2">
              <label className="text-[#1a365d] font-medium" htmlFor="email">
                Email
              </label>
              <Input id="email" type="email" placeholder="name@example.com" className="bg-slate-50" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[#1a365d] font-medium" htmlFor="password">
                  Password
                </label>
                <Link href="#" className="text-blue-500 hover:text-blue-600 text-sm">
                  Forgot password?
                </Link>
              </div>
              <Input id="password" type="password" placeholder="Enter your password" className="bg-slate-50" />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="remember" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>

            <Button type="submit" className="w-full bg-[#3182ce] hover:bg-[#2b6cb0] h-12 text-base">
              Sign in
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}

