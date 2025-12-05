import { Button } from "@/components/ui/button";
import { Zap, Users, BookOpen, GraduationCap, Code, ChevronRight, CheckCircle, Globe, Target, Star, Award, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white px-5 pt-10 lg:px-16 text-center lg:text-left">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Jasa Pembuatan Website & Kursus Coding
                </h1>
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Solusi profesional untuk pembuatan website dan pembelajaran teknologi.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Pesan Sekarang
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-blue-600 hover:bg-white hover:text-blue-800 text-lg px-8 py-6 rounded-xl font-semibold transition-all duration-300">
                  Daftar Kursus
                </Button>
              </div>
              
              <div className="flex items-center gap-6 text-blue-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>100% Profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Harga Terjangkau</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Support 24/7</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4 text-center">
                      <Code className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">HTML/CSS</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 text-center">
                      <Zap className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">JavaScript</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 text-center">
                      <Globe className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Responsive</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4 text-center">
                      <Users className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Mentoring</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Ondisia */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Tentang Ondisia
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ondisia adalah penyedia jasa digital terpercaya yang berfokus pada pembuatan website profesional, 
              optimasi website, jasa pengerjaan tugas, serta kursus pembuatan website dari dasar hingga mahir.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Pembuatan Website</h3>
                <p className="text-gray-600 text-sm">Website profesional dan modern</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Optimasi Website</h3>
                <p className="text-gray-600 text-sm">Meningkatkan performa website</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Jasa Pengerjaan Tugas</h3>
                <p className="text-gray-600 text-sm">Bantu mengerjakan tugas website</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Kursus Website</h3>
                <p className="text-gray-600 text-sm">Belajar dari dasar hingga mahir</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Layanan */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi lengkap untuk kebutuhan website dan pembelajaran coding Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Pengerjaan Tugas Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600">
                  Bantu mengerjakan tugas website untuk sekolah dan kuliah dengan hasil yang memuaskan.
                </CardDescription>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Tepat waktu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Kualitas terbaik</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Documen lengkap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl">Optimasi Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600">
                  Meningkatkan performa website Anda untuk loading yang lebih cepat dan SEO friendly.
                </CardDescription>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Optimasi kecepatan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Mobile friendly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Pembuatan Website dari Nol</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600">
                  Jasa pembuatan website profesional sesuai kebutuhan bisnis atau personal Anda.
                </CardDescription>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Desain modern</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Maintenance support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-10 w-10 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Kursus Website</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-gray-600">
                  Belajar membuat website dari dasar dengan HTML, CSS, dan JavaScript.
                </CardDescription>
                <ul className="text-left space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Materi lengkap</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Praktik langsung</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>Sertifikat</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mengapa Memilih Kami */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Mengapa Memilih Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat Ondisia menjadi pilihan terbaik untuk kebutuhan website Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cepat, Rapi, dan Profesional</h3>
                <p className="text-gray-600">Pengerjaan tepat waktu dengan hasil yang rapi dan profesional sesuai standar industri.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cocok untuk Tugas Sekolah/Kuliah</h3>
                <p className="text-gray-600">Pengalaman membantu berbagai tugas website dari tingkat sekolah hingga perguruan tinggi.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Konsultasi Gratis</h3>
                <p className="text-gray-600">Konsultasi gratis untuk membantu menentukan solusi terbaik untuk kebutuhan Anda.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Star className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Transparansi Harga</h3>
                <p className="text-gray-600">Harga yang kompetitif dan transparan tanpa biaya tersembunyi.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Kursus Ramah Pemula</h3>
                <p className="text-gray-600">Materi kursus dirancang khusus untuk pemula dengan pendekatan yang mudah dipahami.</p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Waktu Fleksibel</h3>
                <p className="text-gray-600">Jadwal yang fleksibel untuk kursus dan pengerjaan proyek sesuai waktu Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
