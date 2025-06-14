'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Eye, Wind, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Products
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Technology
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/ae1ee9d6-1572-459f-b601-5592dba98d1a.jpg?"
                                    alt="TopMask Pro Full-Face Snorkel Mask - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/17e8cd25-9136-4163-bd81-b49d31892b2d.jpg?"
                                        alt="TopMask Pro underwater view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/3d864ae8-4001-4b90-9480-a24c546c6e8d.jpg?"
                                        alt="TopMask Pro side view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/3ee5154c-e214-47f1-aeec-c7a717ca98b9.jpg?"
                                        alt="TopMask Pro features"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-square bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-300 hover:scale-105 transition-all duration-200">
                                    <Image
                                        src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/ae1ee9d6-1572-459f-b601-5592dba98d1a.jpg?"
                                        alt="TopMask Pro detail view"
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <Badge variant="secondary" className="text-xs font-medium bg-blue-100 text-blue-700">
                                        🇩🇪 German Engineering
                                    </Badge>
                                    <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-700">
                                        #1 Rated on Google
                                    </Badge>
                                </div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                                    TopMask Pro: Revolutionary Full-Face Snorkel Mask
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(4,892 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Breathe naturally underwater with our CO2 SICURO technology. Experience 180° panoramic views with fog-resistant clarity. Perfect for beginners and experts alike.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$89.99</span>
                                    <span className="text-xl text-slate-500 line-through">$129.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        31% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all">
                                    <Shield className="h-5 w-5 text-blue-700" />
                                    <span className="font-medium text-sm">CO2 SICURO Safety</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all">
                                    <Eye className="h-5 w-5 text-blue-700" />
                                    <span className="font-medium text-sm">180° Panoramic View</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all">
                                    <Wind className="h-5 w-5 text-blue-700" />
                                    <span className="font-medium text-sm">Anti-Fog Technology</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl hover:shadow-md transition-all">
                                    <Globe className="h-5 w-5 text-blue-700" />
                                    <span className="font-medium text-sm">Universal Fit</span>
                                </div>
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                                    >
                                        Dive Into Freedom - Order Now
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                                        Transform Your Underwater Experience
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-blue-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Worldwide delivery</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-blue-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Risk-free trial</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-blue-600" />
                                    <div>
                                        <p className="text-sm font-semibold">2-Year Warranty</p>
                                        <p className="text-xs text-slate-500">German quality</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Why Choose TopMask Pro?
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Shield className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">CO2 SICURO Technology</h3>
                                    <p className="text-slate-600">Advanced valve system prevents dangerous CO2 buildup, ensuring safe breathing underwater</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Eye className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">180° Panoramic View</h3>
                                    <p className="text-slate-600">Crystal-clear vision with unobstructed views of the underwater world around you</p>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Wind className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">Natural Breathing</h3>
                                    <p className="text-slate-600">Breathe naturally through nose and mouth, perfect for beginners and experts alike</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-blue-50 rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:text-blue-600">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Advanced Safety Features</h3>
                                        <div className="space-y-5">
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">CO2 SICURO System</h4>
                                                    <p className="text-slate-600 leading-relaxed">Smart valve technology prevents CO2 buildup for safe breathing</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Anti-Fog Technology</h4>
                                                    <p className="text-slate-600 leading-relaxed">Separate breathing chambers ensure crystal-clear vision</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Universal Fit Design</h4>
                                                    <p className="text-slate-600 leading-relaxed">Adjustable straps and multiple sizes for perfect seal</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-4">
                                                <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                <div className="space-y-1">
                                                    <h4 className="font-semibold text-slate-900">Prescription Compatible</h4>
                                                    <p className="text-slate-600 leading-relaxed">Supports prescription lenses from -6.0 to +6.0 diopters</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl shadow-lg overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/17e8cd25-9136-4163-bd81-b49d31892b2d.jpg?"
                                            alt="TopMask Pro features demonstration"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-lg border-0">
                                        <CardHeader className="pb-4 bg-gradient-to-r from-blue-50 to-cyan-50">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4 pt-6">
                                            {[
                                                { label: "Material", value: "Medical-grade Silicone" },
                                                { label: "Lens", value: "Shatterproof Polycarbonate" },
                                                { label: "Field of View", value: "180° Panoramic" },
                                                { label: "Sizes Available", value: "S/M, L/XL" },
                                                { label: "Weight", value: "450g" },
                                                { label: "Certification", value: "CE, FDA Approved" },
                                                { label: "Warranty", value: "2 Years" },
                                                { label: "Origin", value: "Designed in Germany" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's Included</h3>
                                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 shadow-lg space-y-4">
                                            {[
                                                "1x TopMask Pro Full-Face Snorkel Mask",
                                                "1x Waterproof Carry Bag",
                                                "1x GoPro Mount Adapter",
                                                "1x User Manual (5 Languages)",
                                                "1x Warranty Certificate",
                                                "2x Earplugs",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 4,892 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "4,158" : stars === 4 ? "489" : "245"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Sarah Mitchell",
                                                avatar: "SM",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game-changer for snorkeling!",
                                                content:
                                                    "I've tried many snorkel masks, but TopMask Pro is on another level. The CO2 safety system gives me peace of mind, and the panoramic view is incredible!",
                                            },
                                            {
                                                name: "James Chen",
                                                avatar: "JC",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Perfect for beginners",
                                                content:
                                                    "As someone new to snorkeling, this mask made it so easy. Natural breathing through nose and mouth, no fogging, and the fit is perfect!",
                                            },
                                            {
                                                name: "Maria Rodriguez",
                                                avatar: "MR",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Worth every penny",
                                                content:
                                                    "The German engineering really shows. Used it in Hawaii for a week - crystal clear views, comfortable fit, and the prescription lens option is fantastic!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-lg border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <Image
                                                                src="/placeholder-user.jpg"
                                                                alt="User"
                                                                width={48}
                                                                height={48}
                                                                className="rounded-full"
                                                            />
                                                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "How does the CO2 SICURO system work?",
                                                answer:
                                                    "The CO2 SICURO system features separate breathing and viewing chambers with smart valves that channel exhaled air out through the snorkel, preventing dangerous CO2 buildup that can occur in traditional full-face masks.",
                                            },
                                            {
                                                question: "Can I use this mask if I wear glasses?",
                                                answer:
                                                    "Yes! TopMask Pro is compatible with prescription lens inserts ranging from -6.0 to +6.0 diopters. You can order the prescription inserts separately and easily install them.",
                                            },
                                            {
                                                question: "What sizes are available?",
                                                answer:
                                                    "We offer two sizes: S/M (for most women and youth) and L/XL (for most men). Our sizing guide helps ensure you get the perfect fit for a leak-free experience.",
                                            },
                                            {
                                                question: "How do I prevent fogging?",
                                                answer:
                                                    "TopMask Pro features advanced anti-fog technology with separate breathing chambers. The design prevents warm breath from reaching the lens area, ensuring crystal-clear vision throughout your snorkeling session.",
                                            },
                                            {
                                                question: "Is it safe for children?",
                                                answer:
                                                    "TopMask Pro is suitable for children 10+ years old with adult supervision. The S/M size typically fits youth well. Always ensure proper fit and supervise children while snorkeling.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl px-6 shadow-md border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Join Thousands of Satisfied Snorkelers
                    </h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Experience the underwater world like never before with TopMask Pro
                    </p>
                    <Button size="lg" className="h-14 px-8 text-lg font-semibold bg-white text-blue-600 hover:bg-blue-50 shadow-xl">
                        Get Your TopMask Today
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <Image
                                src="/placeholder-logo.png"
                                alt="Logo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-semibold text-xl">TopMask</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 TopMask. German Engineering Since 2017.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}