let secim = prompt("Bir sabah uyandığında, kendini bilinmeyen bir yerde buldun. Gözlerini açtığında etrafında devasa ağaçların ve yoğun sisin sardığı bir ormanın ortasında olduğunu fark ettin"+
   "Hangi yöne gideceğine karar vermelisin. \n\nSislerin arasına doğru 'ilerle' ya da ağaçların üstüne 'tırman' ve yukarıdan kartalların uçtuğu dağlara doğru git ve yol bulmayı dene ");

if(secim=='ilerle') {
  secim = prompt("Sislerin içine doğru yürümeye başladığında, ormanın içindeki gölgelerin hareket ettiğini fark ediyorsun"+
   "Bu gölgeler yavaş yavaş bir forma bürünüyor ve karşıdan bir yaratık yaklaşıyor.?" +
   "\n\nYaratıktan 'saklan' ya da yaratıkla 'yüzleş' ve onunla konuş.");

  if(secim=='saklan'){
   secim=prompt("Sessizce bir çalının arkasına saklandın. Yaratık seni fark etmeyip ormanın derinliklerine doğru gidiyor." + 
   "Bir süre bekledikten sonra yola devam ediyorsun ve büyük bir antik tapınağa ulaşıyorsun."+
   "\n\nTapınağa 'gir' ya da tapınağı dışarıdan 'keşfet'");

    if(secim=='gir'){
      secim=prompt("Tapınağın içi, mistik sembollerle dolu. Aniden bir kapı açılıyor ve karşına eski bir bilge çıkıyor."
      +'Seçilmiş kişi sensin' + " diyor bilge." + 
      "\n\nBilmecelerini 'dinle' ya da Bilgeyi geçip yola 'devam' et.");

      if(secim=='dinle'){
        secim=prompt("Bilge demiş ki : \nEfsaneye göre;\nYardımsever olmasıyla birlikte " +
        "destanların yazıldığı döneme yetişemeyen siz bahtsız kullar için bu kişinin yazdığı revize raporlarının insanlığa gönderildiği söylenir."+ 
        "\nKimdir bu kişi? \n(Adını yazmanız yeterli)");
        if(secim=='nihat'){
          alert("Tebrik ederim bu kadim insanı bilerek tapınaktaki gizli hazineye ulaştınız. \n\nMUTLU SON");
        }
        else {
          alert("Maalesef batırdınız. Siz de artık tapınağın lanetini oluşturan bir parçasınız.\n\nSON")
        }
      }
      else if(secim=='devam'){
        secim=prompt("Bilgeden kaçış yok. Cevaba ulaşmak için anahtar kelimeleri size sunuyor" +
        "\nAnahtar kelimeler :\n'Kısmet bu işler'\n'Indent'lere dikkat edin'\n'Tasarımcı hatası'\n'Bu renk kodunu niye kopyalamıyor?'"+
        "\nBahse konu kişinin adı : ");
        if(secim=='orhan'){
          alert("Tebrikler, bu kadim kişiyi bildiniz. Tapınağın hazinesi sizindir. \n\nMUTLU SON")
        }
        else {
          alert("Maalesef batırdınız. Siz de artık tapınağın lanetini oluşturan bir parçasınız.\n\nSON")
        }
      }
      else {
        alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
      }
      
    }
    else if(secim=='keşfet'){
      secim=prompt("Tapınağın dışındaki taş yazıtları inceleyerek, ormanın laneti hakkında bilgiler buluyorsun." +
        "Tapınağın girişinde garip bir anahtar buluyorsun.\n\nAnahtarı kullanarak 'içeri gir' ya da anahtarı al ve geri 'dön'.")
        if(secim=='içeri gir'){
          secim=prompt("Anahtarı aldıktan sonra seni bir bilge karşıladı ve testten geçeceğini söyledi.\nŞıkkı yazmanız yeterlidir."+
            "\nSorusu ise şu : Hangisi daha uzun metne sahiptir ?\n"+
            "\na)Shakespeare Soneleri" + 
            "\nb)Roma Hukuku" + 
            "\nc)Manas Destanı" + 
            "\nd)Nihat Duysak revize yazıları");
            if(secim=='d'){
              alert('Bu şıkkı işaretlemekle saklı hazinenin sahibi oldunuz. Tebrikler\n\nMUTLU SON');
            }
            else {
              alert("Revize yazılarının görkemine ve haşmetine şahit olamayacak kadar şanssız olmak sizin suçunuz değil"+
                "; ama sonuç olarak maalesef batırdınız ve lanetlendiniz. \n\nSON");
            }

        }
        else if (secim=='dön'){
          secim=prompt("Anahtarı bıraktıktan sonra seni bir bilge karşıladı ve testten geçeceğini söyledi.\nŞıkkı yazmanız yeterlidir."+
          "\nMerve Hanım'ın wp konuşmalarında perşembe günleri 'arkadaşlar' şeklinde başlayan sorularının asıl alıcısı kimdir?" + 
          "\na)Nihat Bey" + 
          "\nb)Busenur Hanım"+
          "\nc)Sudenur Hanım");
          if(secim=='a'){
            alert('Bu şıkkı işaretlemekle saklı hazinenin sahibi oldunuz. Tebrikler\n\nMUTLU SON');
          }
          else if(secim='c') {
            alert('Buse ve Sude Hanım ne yazık ki aynı kişi, bu cevap sizi tapınağın lanetiyle baş başa bırakıyor.\n\nSON');
          }
          else {
            alert("Yanlış cevap vererek lanetlenmeye hak kazandınız. TEBRİKLER\n\nSON");
          }
        }
    }
    else {
      alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
    }
  }
  else if(secim=='yüzleş'){
   secim=prompt("Cesaretini topladın ve yaratığa seslendin. Yaratık, gözleri parlayan devasa bir kurt adam."+
   "Sana konuşan bir tonla, 'Buradan gitmek için bir yol biliyorum, ama bir bedeli var,' dedi." + 
   "\n\nYardım teklifine 'evet' de ya da  teklifi 'reddet' ve kendi yolunu bulmaya çalış.");
   if(secim=='evet'){
    secim=prompt("Yaratık seni karanlık bir mağaraya götürüyor. Mağaranın derinliklerinde büyük bir hazine var ama yaratık, bu hazineyi paylaşmak için senden bir fedakarlık bekliyor."+
      "\nFedakarlığı 'kabul et' ya da hazineyi almadan mağaradan 'kaç'");
      if(secim=='kabul et'){
        secim=prompt("Bir teste tabi tutulacaksın, kaderini belirleyecek çok önemli soru ise şu : " + 
          "\nFyodor Dostoyevski kimin için 'Onun revize yazılarını okumamış olsaydım Suç ve Ceza'yı yazamazdım, ben hayatımda böyle uzun ve derin betimlemeler görmedim' demiştir?"+
          "\na)Anton Çehov"+
          "\nb)Tolstoy"+
          "\nc)Nihat Hoca"+
          "\nd)Victor Hugo");
          if(secim=='c'){
            alert('Edebiyat konusundaki yetkinliğiniz size gizli hazinenin kapılarını açtı.\n\nMUTLU SON');
          }
          else {
            alert('Nihat Hoca ile tanışamamak sizin sorununuz değil ama lanetlenmek de bizim sorunumuz değil. Üzgünüm ama lanetlendiniz.\n\nSON')
          }

      }
      else if(secim=='kaç'){
        secim=prompt("Yaratık sizi yakalıyor ve bilge kişiye götürüyor. Bilge kişi size lanetlenmemek için son bir fırsat veriyor ve"+
          "soru soracağını söylüyor. Şıkkı yazmanız yeterli olacaktır.\n Kaderinizi belirleyecek soru ise şu : "+ 
          "\nPablo Picasso kimin için 'Onun excalidraw'daki çizimleri bana ilham vermese ressam olur muydum, bilemiyorum' demiştir"+
          "\na)Orhan Hoca"+
          "\nb)Salvador Dali"+
          "\nc)Leonardo Da Vinci"+
          "\nd)Claude Monet");
          if(secim=='a'){
            alert('Tebrikler, lanetlenmekten kurtuldunuz. Özgürsünüz. \n\nMUTLU SON')
          }
          else {
            alert('İşaretlediğiniz şık önemli ressam olup excalidraw ile ilgili yeterli hünere sahip değildir. Lanetlendiniz. \n\nSON'); 
          }
      }
      else {
        alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
      }
   }
   else if(secim=='reddet'){
    secim=prompt("Karşınıza bir bilge çıktı ve size doğru yolu göstereceğini iletti.Onu 'dinle' ya da yanından 'ayrıl'");
    if(secim='dinle'){
      secim=prompt('Bilge, sana yapacağı testin kaderini belirleyeceğini söylüyor. Şıkkı yazman yeterli olacak. Soru ise şu:'+
        '\nHangisi daha seyrek gerçekleşir' + 
        "\na)Halley kuyrukluyıldızının Dünya'dan geçmesi"+
        "\nb)Sahra Çölü'ne kar yağması"+
        "\nc)Ay tutulması"+
        "\nd)Orhan Hoca'nın Figma'da yer alan bir tasarımı beğenmesi");
        if(secim=='d') {
          alert('Bravo, gizli hazineyi almaya hak kazandınız.\n\nMUTLU SON');
        }
        else {
          alert('d şıkkındaki manzaraya şahit olamadığınız ve lanetlendiğiniz için şanssızsınız. Üzgünüm. \n\nSON');
        }
    }
    else if(secim=='ayrıl'){
      secim=prompt('Bilgeden kaçış yok. Teste tabi tutulacaksınız. Soru ise şu :'+
        "\nHangisi Orhan Hoca için daha zordur?"+ 
        "\na)Yazdığı sitenin ödül alması"+
        "\nb)Cumartesi günü iş değiştirmek"+
        "\nc)Aya çıkmak"+ 
        "\nd)Figma'dan renk kodunu tekte kopyalamak"
      );
      if(secim='d'){
        alert('Bilgeliğiniz kurtuluşunuz oldu. Gizli hazine sizindir. \n\nMUTLU SON')
      }
      else {
        alert('Edindiğimiz tecrübelere göre cevap ne yazık ki bu değil, lanetlendiniz. \n\nSON')
      }
    } 
   }
  }
  else {
   alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
  }
}
else if(secim== 'tırman') {
  secim = prompt("Dağlara doğru tırmanırken, karşına bir büyücü çıkıyor. Büyücü, dağın zirvesinde eski bir sırrın kilitlendiğini söylüyor, ancak seni uyarmadan önce bir mağara girişi gösteriyor."
    +"\nZirveye doğru 'git' ve sırrı keşfet. veya büyücünün gösterdiği 'mağaraya gir'");

    if(secim=='git'){
      secim=prompt("Zirveye ulaştığında eski bir kılıç buluyorsun. Bu kılıcın efsanevi bir güce sahip olduğunu hissediyorsun. Ancak kılıcı almak için bir bedel ödemek zorundasın."+
        "Kılıcı 'al' ve bedeli öde veya kılıcı almadan 'geri dön'");
        if(secim=='al'){
          secim=prompt('Kılıcı aldığında, hayatından bir parça bırakman gerekiyor. Kılıcı alarak büyük bir güç kazanıyorsun ama bu güç, ruhunu karanlığa çekebilir.'+
            "\nKılıcı kullanmaya 'başla' ya da kılıcı bırak ve yola 'devam et'.");
            if(secim=='başla'){
              secim=prompt('Kılıcı hak etmek için bir anda zuhur eden yaratığın sorusunu cevaplamak zorundasın' + 
                "Belirleyici soru şu :\nKılıç kullanmalarıyla ünlü Japon mafyasının ismi nedir?");
              if(secim=='yakuza'){
                alert('Tebrikler, kılıcı almaya hak kazandınız.\n\nSON');
              }
              else {
                alert('Kılıcı hak etmek için bunu bilmek gerekiyodu, kılıcın laneti bundan sonra sonsuza kadar sizinle olacak\n\nSON');
              }
            }
            else if(secim=='devam et') {
              secim==prompt('Yola devam ettin ve karşına bilge çıktı. Gizli hazineye erişmek istiyosan test yapacağını söylüyor'+
                "'Kabul et' veya 'ayrıl'");
                if(secim='ayrıl'){
                  alert('Macera burda sona erdi. Oynadığın için teşekkürler\n\nSON');
                }
                else if('kabul et'){
                  secim=prompt('İstanbul gibi yedi tepe üzerine kurulmuş şehir hangisidir diyor bilge. Şıkkı yazman yeterli'+
                    "\na)Roma"+
                    "\nb)Paris"+
                    "\nc)Londra"+
                    "\nd)Madrid");
                  if(secim=='a'){
                    alert('Tebrikler. Karun kadar olmasa da zenginsiniz hadi yine iyisiniz\n\n SON');
                  }
                  else{
                    alert('Maalesef batırdınız ve bilge sizi lanetlemeye karar verdi keyfi bir şekilde.\n\nSON');
                  }
                }
            }
        }
        else if(secim=='geri dön'){
          secim=prompt('Geri döndüğünde kendini bir göl kenarına gelmiş buluyorsun.'+
            'Gölün kenarında bir kayık duruyor, ormanın derinliklerinde ise eski bir patika var. '+
            "Kayığa 'bin' ve gölün karşısına geç ya da ormanın derinliklerindeki patikaya doğru 'yürü'."
          )
          if(secim=='bin'){
            secim=prompt('Gölün karşı kıyısına ilerlerken, suyun derinliklerinden gelen bir fısıltı duyuyorsun. Suyun altında hareket eden büyük bir gölge fark ediyorsun.'+
            "Fısıltı, 'Eğer cesursan, suya dal', diyor."+
            "\nSuya dal ve gölün derinliklerine 'in' ya da kayıkla karşı kıyıya gitmeye 'devam et'.");
            if(secim=='in'){
              secim=prompt('Suya daldığında kendini büyülü bir su altı şehrinde buluyorsun. Şehrin ortasında, parlayan bir inci var. Ancak inciyi koruyan su perileri, sana yaklaşıyor.'+
                "\nPerilerle dostça 'konuş' ya da inciyi 'çal' ve kaç.");
                if(secim=='konuş'){
                  secim=prompt('Perilerle dostça konuşmayı deniyorsun. Onlar sana inciyi nasıl kazanabileceğini anlatıyor, ancak bir fedakarlık yapman gerekiyor.'+
                    "Fedakarlığı kabul et ya da inciyi almadan su altı şehrini terk et.");
                }
                else if(secim=='kaç'){
                  alert('Periler seni lanetledi dostum. \n\nSON');
                }
                else {
                  alert('Yanlış ifade, oyuna yeniden başlayın.');
                }
            
            }
            else if('devam et'){
              secim=prompt('Kayıkla karşı kıyıya ulaştığında, seni bekleyen eski bir savaşçı heykeliyle karşılaşıyorsun. Heykelin gözleri parlıyor,'+
                "sana bir soru soruyor. Bilirsen gizli hazine senin olacak. Soruyu 'gör' ya da bu diyarı 'terk et'");
              if(secim=='gör'){
                secim=prompt("Soru şu : Cervantes'in öldüğü gün doğan, tiyato oyunlarıyla ünlü İngiliz yazar kimdir");
                if(secim=='shakespeare') {
                  alert('Edebiyat bilginiz sayesinde hazineye hak kazandınız.\n\nMUTLU SON');
                }
                else {
                  alert('Üzgünüm ama lanetlendiniz.\n\nSON');
                }
              }
              else if('terk et'){
                alert('Uğurlar olsun.\n\nSON');
              }
            }
          }
          else if(secim=='yürü'){
            secim=prompt("Ormanın içindeki gizemli sesleri takip ederek, ağaçların arasından geçen bir patikaya ulaşıyorsun. Patikanın sonunda eski bir büyücünün kulübesini buluyorsun."+
              "\nBüyücüyle 'konuş' ya da kulübenin etrafını 'araştır'.");
            if(secim=='konuş'){
              secim=prompt('Büyücü sana, kaybolan ruhların hikayesini anlatıyor ve seni onlardan koruyacak bir tılsım sunuyor.'+
                "Tılsımı 'al' ya da  tılsımı 'reddet' ve başka bir yol bul.");
                if(secim=='al'){
                  alert('Tılsım tarafından lanetlendiniz. Maalesef batırdınız. \n\nSON');
                }
                else if(secim=='reddet') {
                  alert('Büyücü sinirlendi ve sizi lanetledi, artık ormandaki lanetlerin bir üyesisiniz. \n\nSON');
                }
                else {
                  alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
                }
            }
            else if(secim=='araştır') {
              secim==prompt('Kulübede hazine olduğunu keşfettiniz, ancak o sırada bir yaratık zuhu etti, soracağı soruyu bilirseniz hazine sizin' + 
                "yoksa lanetlenecesiniz.\nBurayı 'terk et' ya da soruyu 'cevapla'");
                if(secim=='terk et'){
                  alert('Hoşçakalın, lanetlenmemek de bir şeydir.');
                }
                else if('cevapla'){
                  secim=prompt("Jül Sezar ünlü 'Veni Vidi Vici' sözünü nerede söylemiştir? (şıkkı yazmanız yeterli)"+
                    "\na)Tokat"+
                    "\nb)Roma"+
                    "\nc)Kahire"+
                    "\nd)Muş");
                    if(secim=='a'){
                      alert('Hazineye hak kazandınız. Tebrikler!!! \n\nSON');
                    }
                    else {
                      alert('Terk etseydiniz daha iyiydi çünkü lanetlendiniz dostum.\n\nSON');
                    }
                }
            }

          }
        }
    }
    else if('mağaraya gir'){
      secim=prompt('Mağaranın derinliklerine indikçe, yer altı dünyasının girişi olduğunu anlıyorsun. Burası, ruhların kaybolduğu bir diyar. İçeri girmek tehlikeli olabilir.'+
      "Yer altı dünyasına 'gir'ya da mağaradan 'geçite yönel'." );
        if(secim=='gir'){
          secim=prompt('Yer altı dünyasına girdiğinde, kaybolan ruhları görebiliyorsun. Bu ruhlardan biri sana eski bir krallığın haritasını veriyor.' + 
            "Haritayı 'takip et' ya da ruhların dünyasından 'çık.'");
            if(secim='takip et') {
              secim=prompt('Haritayı takip ederek bilgeyle karşılaştın. Sorusunu bilirsen hazineyi bilemezsen lanetlenmeyi kazanırsın' + 
                "\nSoru ise şu : " + 
                "\n'Bana mutluluğun resmini yapabilir misin Abidin' sorusuna Abidin Dino'nun cevabı ne olmuştur?"+
                "\na)Balık Pazarı tablosunu çizmiştir"+
                "\nb)Çizemem demiştir"+
                "\nc)Mona Lisa'yı çizmiştir"+
                "\nd)Nihat Hoca'nın ödevler verildiği sıradaki yüzünü çizmiştir."
              )
              if(secim=='d'){
                alert('Mutluluğu bunun gibi yansıtan çok az anlar vardır ve siz bunu bildiniz. Tebrikler\n\nMUTLU SON');
              }
              else {
                alert("Nihat Hoca'nın ödevler verildiği sıradaki yüzünü görseydiniz ne demek istediğimizi anlardınız. Yanıldınız ve lanetlendiniz. \n\nSON");
              }
            }
            else if(secim=='çık'){
              secim=prompt('Gizli hazineyi kazanmaktan vazgeçmek üzeresiniz. Son kararınız mı? '+
              "'Evet' ya da 'hayır'?");
              if(secim=='evet'){
                alert('Macera burda sona erdi\n\nSON');
              }
              else if(secim=='hayır'){
                alert('Kararsızlık en kötü karar, bundan dolayı lanetlendiniz.');
            }
          }
        }
        else if(secim=='geçite yönel') {
          secim=prompt('Geçit seni başka bir dünyaya götürüyor. Burası tamamen karanlık ve burada yaşayan yaratıkların seninle ilgisi var gibi görünüyor.' + 
          "Karanlık yaratıklarla 'savaş' ya da onlarla 'anlaşma' yap.");
            if(secim=='savaş'){
              secim=prompt('Çevreden gelen yaratıkların Sesin kaynağına yaklaştığında, büyük bir ejderha ile karşılaşıyorsun.' + 
                "Seçeneklerin : 'topukla' ya da 'kül ol'");
                if(secim=='topukla'){
                  secim=prompt('Usain Bolt görse gurur duyardı diyebileceğimiz bir hızla kaçtın. Tebrikler \n\nSON')
                }
                else {
                  secim=prompt('Değişik bir tercih. Başka oyunda görüşmek üzere\n\nSON');
                }
            }
              else if(secim=='anlaşma') {
                secim=prompt('Sana bir soru soracak ejderha, bilirsen özgürsün.' + 
                "\nDostoyevski hangi yazarın hangi eserine ithafen 'Hepimiz onun paltosundan çıktık' demiştir?(Şıkkı yazmanız yeterli)"+
                "\na)Gogol-Palto"+
                "\nb)Tolstoy-Savaş ve Barış"+
                "\nc)Turgenyev-Babalar ve Oğullar"+
                "\nd)Nihat Duysak-Revize Raporları");
                if(secim=='a'){
                  alert('Tebrikler, özgürsünüz.\n\nSON');
                } 
                else if(secim=='d'){
                  alert('Yanlış cevap ancak torpillisiniz. Özgürsünüz \n\nSON');
                }
                else {
                  alert('Üzgünüz ama ejderha cevabı beğenmedi ve yanıp kül oldunuz\n\nSON');
                }
              }
        }

    }
 }
else {
  alert("Yanlış ifade girdiniz, lütfen sayfayı yenileyip oyuna yeniden başlayın.");
}