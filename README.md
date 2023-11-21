# Ödev 2

Yereldeki json dosyaları üzerinden çalışan kayıt API oluşturma

* Projede node.js ve express.js kullanılacak
* Rest API standartlarına uygun tasarlanacak ve Postmande dökümantasyonu
oluşturulacak
* dosya yapısı örnek linkteki gibi olacak (yani tüm proje tek dosyaya yazılmayacak
middeleware, routeler vb .ayrı ayrı olacak) https://blog.logrocket.com/organizingexpress-js-project-structure-better-productivity/
* Her request öncesi header içinde kullanıcının en az 12 haneli bir token
gönderdiğini ve header içinde userEmail değişkeninin olup aynı zamanda valid
bir email olduğu kontrol edilecek (Regex kullanılabilir). Eğer bu koşullar
sağlanmıyorsa sağlanmayan koşulllar ile alakalı hata kodu gönderecek
* çalışan kaydetmek için post methodu olacak ve içinde {name: String, age: Number,
stillEmloyee: Boolean} değişkenleri ve doğru değişken tiplerini zorunlu olarak
isteyecek. Eğer tipler ve değişkenler aynı anda koşulu sağlamıyorsa alakalı bir
hata mesajı geriye döndürecek.
* Her çalışan sisteme kaydedilirken uniqe bir id değeri çalışana atacak. tüm kayıt
işlemleri Fs modülü kullanılacak bir json dosyasına kaydedilecek
* Tüm isteklerde json dosyası senkron olarak güncellenecek
* Tüm çalışanları ve id verilen çalışanın geriye döneceği bir method olacak
* id si gönderilen çalışanın silindiği bir method olacak
* id si gönderilen çalışanın verilerinin update edildiği bir method olacak (varsa
zorunlu verilerin tipleri kontrol edilecek ve id değiştirmeye izin verilmeyecek)
