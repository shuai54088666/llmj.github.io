const apilists=['https://cdn.imlazy.ink:233/img/background/98941448_p0.png', 'https://cdn.imlazy.ink:233/img/background/97423306_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/96213682_p0.png', 'https://cdn.imlazy.ink:233/img/background/08(2).png', 'https://cdn.imlazy.ink:233/img/background/84438354_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/71786382_p0.png', 'https://cdn.imlazy.ink:233/img/background/85552528_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/91775801_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86225298_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89206202_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103557189_p0.png', 'https://cdn.imlazy.ink:233/img/background/99221906_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/97313182_p0.png', 'https://cdn.imlazy.ink:233/img/background/87007887_p0.png', 'https://cdn.imlazy.ink:233/img/background/86492434_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/72235081_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/85650416_p0.png', 'https://cdn.imlazy.ink:233/img/background/86770232_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87002337_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/90010553_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103181515_p0.png', 'https://cdn.imlazy.ink:233/img/background/82104637_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99425976_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99017205_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/97341875_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93245755_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94819771_p0.png', 'https://cdn.imlazy.ink:233/img/background/94817272_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94755985_p0.png', 'https://cdn.imlazy.ink:233/img/background/93821718_p0.png', 'https://cdn.imlazy.ink:233/img/background/87825932_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/306187.jpg', 'https://cdn.imlazy.ink:233/img/background/91173778_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101573593_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/90575757_p0.png', 'https://cdn.imlazy.ink:233/img/background/05.png', 'https://cdn.imlazy.ink:233/img/background/89478039_p0.png', 'https://cdn.imlazy.ink:233/img/background/80774528_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88698545_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86034756_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93587761_p0.png', 'https://cdn.imlazy.ink:233/img/background/85499466_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93075135_p0.png', 'https://cdn.imlazy.ink:233/img/background/93048000_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89492772_p0.png', 'https://cdn.imlazy.ink:233/img/background/64392523_p0.png', 'https://cdn.imlazy.ink:233/img/background/87772580_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/E9tUsQ8VUAAj-aA.jpg', 'https://cdn.imlazy.ink:233/img/background/E7ifuTgVgAAljEP.png', 'https://cdn.imlazy.ink:233/img/background/87730346_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100664563_p0.png', 'https://cdn.imlazy.ink:233/img/background/100022190_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100257227_p0.png', 'https://cdn.imlazy.ink:233/img/background/96088320_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/81332828_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94819769_p0.png', 'https://cdn.imlazy.ink:233/img/background/94494293_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93594185_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/84678881_p0.png', 'https://cdn.imlazy.ink:233/img/background/90077053_p0.png', 'https://cdn.imlazy.ink:233/img/background/87049335_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/83708125_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/76554906_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87069269_p0.png', 'https://cdn.imlazy.ink:233/img/background/103509198_p0.png', 'https://cdn.imlazy.ink:233/img/background/79713014_p0.png', 'https://cdn.imlazy.ink:233/img/background/97403976_p0.png', 'https://cdn.imlazy.ink:233/img/background/90559009_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89217849_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/4af89134-3a01-4051-b130-ddd39cb14b19.png', 'https://cdn.imlazy.ink:233/img/background/91837671_p0.png', 'https://cdn.imlazy.ink:233/img/background/88128863_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86164137_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/92469555_p0.png', 'https://cdn.imlazy.ink:233/img/background/91501751_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87574502_p0.png', 'https://cdn.imlazy.ink:233/img/background/85579061_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88959468_p0.png', 'https://cdn.imlazy.ink:233/img/background/91176752_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/82877181_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/79687365_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86619274_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/98215752_p0.png', 'https://cdn.imlazy.ink:233/img/background/94014063_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/96029533_p0.png', 'https://cdn.imlazy.ink:233/img/background/95163374_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/79051973_p0.png', 'https://cdn.imlazy.ink:233/img/background/72737456_p0.png', 'https://cdn.imlazy.ink:233/img/background/94428583_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/e937108c243b34854b44c7bc727208b7a046bdaf.png', 'https://cdn.imlazy.ink:233/img/background/281155.jpg', 'https://cdn.imlazy.ink:233/img/background/308655.jpg', 'https://cdn.imlazy.ink:233/img/background/89217963_p0.png', 'https://cdn.imlazy.ink:233/img/background/81555600_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/E9sesXzVoAYAo_S.jpg', 'https://cdn.imlazy.ink:233/img/background/87492436_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/74016100_p0.png', 'https://cdn.imlazy.ink:233/img/background/84437660_p0.png', 'https://cdn.imlazy.ink:233/img/background/84214873_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/90538027_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103562660_p0.png', 'https://cdn.imlazy.ink:233/img/background/97555581_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99027136_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/98322188_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93230229_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/84655195_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89971374_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/408847.png', 'https://cdn.imlazy.ink:233/img/background/56733316_p0.png', 'https://cdn.imlazy.ink:233/img/background/88049646_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86178373_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/90754737_p0.png', 'https://cdn.imlazy.ink:233/img/background/86074500_p1.png', 'https://cdn.imlazy.ink:233/img/background/84396140_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/83485068_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/FuVsxdTaIAAiFEl.jpg', 'https://cdn.imlazy.ink:233/img/background/67141350_p0.png', 'https://cdn.imlazy.ink:233/img/background/61359054_p0.png', 'https://cdn.imlazy.ink:233/img/background/86196382_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87020534_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88721885_p0.png', 'https://cdn.imlazy.ink:233/img/background/66463748_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/73718817_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89219348_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87550307_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/84699476_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/84938851_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87156717_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/56234448_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/85603687_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/95279963_p0.png', 'https://cdn.imlazy.ink:233/img/background/90222643_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/78323842_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88401667_p0.png', 'https://cdn.imlazy.ink:233/img/background/89535961_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87977808_p0.png', 'https://cdn.imlazy.ink:233/img/background/87360027_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/95445281_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94991375_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94829958_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93109685_p0.png', 'https://cdn.imlazy.ink:233/img/background/95198900_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/94091950_p0.png', 'https://cdn.imlazy.ink:233/img/background/70223953_p0.png', 'https://cdn.imlazy.ink:233/img/background/95282976_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/60337427_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/60037810_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/61653319_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/71749377_p0.png', 'https://cdn.imlazy.ink:233/img/background/81012053_p0.png', 'https://cdn.imlazy.ink:233/img/background/86061045_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/85752791_p0.png', 'https://cdn.imlazy.ink:233/img/background/72072832_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/72175889_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/77898136_p0.png', 'https://cdn.imlazy.ink:233/img/background/78316557_p0.png', 'https://cdn.imlazy.ink:233/img/background/72725286_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/72668149_p0.png', 'https://cdn.imlazy.ink:233/img/background/84888671_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/96170098_p0.png', 'https://cdn.imlazy.ink:233/img/background/100517229_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93017820_p0.png', 'https://cdn.imlazy.ink:233/img/background/92463499_p0.png', 'https://cdn.imlazy.ink:233/img/background/59190594_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100481103_p0.png', 'https://cdn.imlazy.ink:233/img/background/100339220_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/98259515_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100072654_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/FTMYwv9aIAA.png', 'https://cdn.imlazy.ink:233/img/background/92295794_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/55550732_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99347160_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87508894_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/84522207_p0.jpg', 'https://i.zerodream.net/f56faafa7d0c7e4d851877e7985f029e.jpg', 'https://i.zerodream.net/f4b772dbf0e76693007149c373fec27d.jpg', 'https://i.zerodream.net/f1bcf4618cecf264bb2514f080442c0e.jpg', 'https://i.zerodream.net/e4167f8f8f7a93baf1331f1f01d0cdf3.png', 'https://i.zerodream.net/e3a197fff5c0f75618c732f41a4bc377.png', 'https://i.zerodream.net/e0af69243a0cebe9035e02a7b4bf2619.png', 'https://i.zerodream.net/e0361f018726fda16ebc7b953489fac0.png', 'https://i.zerodream.net/d947cdace5327235d952ca00b43caa3d.png', 'https://i.zerodream.net/c93e069bdfc5d622dcf14b7440e2552d.png', 'https://i.zerodream.net/c19b3ab9871a919f35e755bb198c712d.jpg', 'https://i.zerodream.net/bbb31a8e6a2f7fd2c3c0f0f6d3ef4cb3.jpg', 'https://i.zerodream.net/ba7db18971c967961a172baefa630fff.jpg', 'https://i.zerodream.net/b885f30aeade962e8d3fd2031040a79f.jpg', 'https://i.zerodream.net/b83e65112a65ed4de7002c2b7bfb4187.png', 'https://i.zerodream.net/b7797e84608b9ed228aa58c7d51a7c1a.png', 'https://i.zerodream.net/b49d6e7bed35959ed9e3cd1983bf7c90.png', 'https://i.zerodream.net/b283a6bf0b4b54d11d4707d5ccbd8dec.png', 'https://i.zerodream.net/af89ed12cf54f846921128fd7c797adb.png', 'https://i.zerodream.net/af73072cc632b3427e3cc47beee45eba.png', 'https://i.zerodream.net/a786359e5b0136eca0d59ab553de8949.jpg', 'https://i.zerodream.net/a735284ffb85a2184f53f8b8146c0ba4.png', 'https://i.zerodream.net/98b0413b9744cf6f4524189c1dae612c.jpg', 'https://i.zerodream.net/96657df553b2551c2e7109dc49ee75fc.jpg', 'https://i.zerodream.net/94ed9467f601fec240ff4b2c17794a58.png', 'https://i.zerodream.net/931a2c380d044b3ef6cb1a03ccc8cae0.jpg', 'https://i.zerodream.net/92d5705dc4c7079a5594cc7ea0264909.jpg', 'https://i.zerodream.net/901fd5eaa00808bfe1c0d5d3325e5eed.png', 'https://i.zerodream.net/8c7f63e16dc7eef429d6a3a1ca8effdf.png', 'https://i.zerodream.net/875a1b638bc58fcda5f57f3cc10318b4.png', 'https://i.zerodream.net/869677a4be6e1ab72062a50be35edaf1.png', 'https://i.zerodream.net/821840c17a2e69e5b241e1fd65975f3e.jpg', 'https://i.zerodream.net/8090f9af1719886aff63744b63d73c56.png', 'https://i.zerodream.net/7e57a822f8962576b7a63f481ee60c88.png', 'https://i.zerodream.net/74750591518743b2c54028c1269418b9.jpg', 'https://i.zerodream.net/6cc0298000328b10f7ab82144974c2bc.jpg', 'https://i.zerodream.net/6c2bc9e93a01e4e66cf3dbdbb87606cb.jpg', 'https://i.zerodream.net/6b36125769751011a40227a305b47623.png', 'https://i.zerodream.net/6ad051b48a321e3a3418c36acadc1953.png', 'https://i.zerodream.net/68327d234b18f5f17fb15a64b65e725e.png', 'https://i.zerodream.net/66e6554b2d0b314cb4d9eb3c31d0fdc8.jpg', 'https://i.zerodream.net/64a6fa1ec0ad8de8654c5463ce154369.jpg', 'https://i.zerodream.net/64190ce4e1bcc1865ed164aa1778f626.png', 'https://i.zerodream.net/6131f8ed9254930a3cf112bd745547a5.jpg', 'https://i.zerodream.net/5d654a5647a85c43362446e0f81d08e3.png', 'https://i.zerodream.net/5b6b61abfca1f2dbb192318c84a186da.png', 'https://i.zerodream.net/58df6bdaed9eaf6cf7a6490e4ffa80e4.jpg', 'https://i.zerodream.net/54889278f68696aa9b6e9cfc8fc9f4b9.jpg', 'https://i.zerodream.net/505d8497757592391fa6163b420ede9a.png', 'https://i.zerodream.net/4f0734164ab822c9d9928de57f59eccc.jpg', 'https://i.zerodream.net/4e2fa761b8283fd1069789670cce245f.jpg', 'https://i.zerodream.net/44ddbaccb8798c9a41ae96fcaa6a3e0b.jpg', 'https://i.zerodream.net/438725de6253789a76f7a81cd5fb8d10.jpg', 'https://i.zerodream.net/42cc79f3fdc888bc8ea2cc406bbff14e.jpg', 'https://i.zerodream.net/425c8baa2bda02ffa0356ffeca748910.png', 'https://i.zerodream.net/4118302df1246ed0db393bd8e1d61191.jpg', 'https://i.zerodream.net/39a1918c16c0e26ae5f1a9783c9aa8ef.png', 'https://i.zerodream.net/358b8eca2fe0c74b509d9f7315955ed1.jpg', 'https://i.zerodream.net/31604d5aa3b5647ab02f38ef020cfef8.png', 'https://i.zerodream.net/304a00310f886e7f23b40d4e62a94dd6.jpg', 'https://i.zerodream.net/2d2ca2350231a8d5d9dc9db42f19bfa6.png', 'https://i.zerodream.net/2b0edfd2a83b032314ce975fd0153157.jpg', 'https://i.zerodream.net/27f321ccc1714cfe174e147011cea276.jpg', 'https://i.zerodream.net/2723a39f896dbd08e3aa1c537b9adbb0.png', 'https://i.zerodream.net/2126677faeef3ccdf049ce1c15515885.jpg', 'https://i.zerodream.net/190a55c08c3cf8a2dda08065127c895b.jpg', 'https://i.zerodream.net/0918a834218f2c697f5c9854b8badd7b.jpg', 'https://i.zerodream.net/0854854de643c56e25eaf2da9762a301.jpg', 'https://i.zerodream.net/02515ebc1473bf4bcba68f2ec98f459e.png', 'https://cdn.imlazy.ink:233/img/background/97842633_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103337343_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100817354_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103416678_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101782172_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100669875_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/62914760_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/97744644_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93775440_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101805095_p0.png', 'https://cdn.imlazy.ink:233/img/background/101062730_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101468453_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/102680719_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100807887_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88480333_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/66817931_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/102728769_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/102852101_p0.png', 'https://cdn.imlazy.ink:233/img/background/101462757_p0.png', 'https://cdn.imlazy.ink:233/img/background/98930694_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99534999_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101199381_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100905849_p0.png', 'https://cdn.imlazy.ink:233/img/background/98974069_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101180527_p0.png', 'https://cdn.imlazy.ink:233/img/background/FeTsbocUYAAwcjo.jpg', 'https://cdn.imlazy.ink:233/img/background/89470847_p0.png', 'https://cdn.imlazy.ink:233/img/background/102779872_p0.png', 'https://cdn.imlazy.ink:233/img/background/wallhaven-290859.png', 'https://cdn.imlazy.ink:233/img/background/vocaloid-devushka-volocy-plate-zont-ulitsa-ptitsa.jpg ', 'https://cdn.imlazy.ink:233/img/background/tooru-kanna-kamui-kobayashi-san-chi-no-maid-dragon-dragon-gi.jpg', 'https://cdn.imlazy.ink:233/img/background/reka-mersed-kaliforniia-ssha-kamennyi-most-zima-sneg-derevia.jpg', 'https://cdn.imlazy.ink:233/img/background/priroda-peizazh-krasota-zelen-gory.jpg', 'https://cdn.imlazy.ink:233/img/background/p0_74432253.png', 'https://cdn.imlazy.ink:233/img/background/main_1.jpg', 'https://cdn.imlazy.ink:233/img/background/fcb254342845263e36a1530c6b1f761b.jpg', 'https://cdn.imlazy.ink:233/img/background/fb5338066091b97bfca16ae4085c5932.jpg', 'https://cdn.imlazy.ink:233/img/background/f415b757d504383c29dfecb8dc5fb9df408eee69.jpg', 'https://cdn.imlazy.ink:233/img/background/eb65ae5ee6f66b6381090f5bee4fe6cbabfd6d0d.png', 'https://cdn.imlazy.ink:233/img/background/e1094c65274658b2f269d180c32ebb682bd0a840.jpg', 'https://cdn.imlazy.ink:233/img/background/dde27de72709b597063cf359dd0d79fc.jpg', 'https://cdn.imlazy.ink:233/img/background/dd2cebf31ec34ce19a92b14ac4d65ba419114e9b.jpg', 'https://cdn.imlazy.ink:233/img/background/d58b57e1129f0eebe955c2a05509b513c353891e.png', 'https://cdn.imlazy.ink:233/img/background/ca86e620b9e623ff-d1c9f350507d226e-6a54915fbf7929b2613657b01e5a3c74.jpg', 'https://cdn.imlazy.ink:233/img/background/bg.png', 'https://cdn.imlazy.ink:233/img/background/a1d868e325cd014a61b9fe347703ffcd9a1f0df1.jpg', 'https://cdn.imlazy.ink:233/img/background/-9lddQhfs-e0mxXaZ2xT3cS1hc-u0.jpg', 'https://cdn.imlazy.ink:233/img/background/89991203_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88984126_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/87126224_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86953871_p0.png', 'https://cdn.imlazy.ink:233/img/background/86953871_p0.png', 'https://cdn.imlazy.ink:233/img/background/86610851_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/112152428_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/82094258_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/81941687_p0.png', 'https://cdn.imlazy.ink:233/img/background/80818749_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/80722853_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/80711958_p0.png', 'https://cdn.imlazy.ink:233/img/background/7b4144bf0a97df935933652825af7440.jpg', 'https://cdn.imlazy.ink:233/img/background/79731173_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/78871552_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/78815991_p0.png', 'https://cdn.imlazy.ink:233/img/background/78468133_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89616320_p2.jpg', 'https://cdn.imlazy.ink:233/img/background/78346150_p0.png', 'https://cdn.imlazy.ink:233/img/background/78315982_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/78104901_p0.png', 'https://cdn.imlazy.ink:233/img/background/78075718_p0.png', 'https://cdn.imlazy.ink:233/img/background/77992108_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/77696024_p0.png', 'https://cdn.imlazy.ink:233/img/background/77298860_p0.png', 'https://cdn.imlazy.ink:233/img/background/77230166_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/76995567_p0.png', 'https://cdn.imlazy.ink:233/img/background/76602490_p0.png', 'https://cdn.imlazy.ink:233/img/background/76478180_p0.png', 'https://cdn.imlazy.ink:233/img/background/76377786_p0.png', 'https://cdn.imlazy.ink:233/img/background/76136517_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/75943001_p0.png', 'https://cdn.imlazy.ink:233/img/background/75843264_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/75586127_p0.png', 'https://cdn.imlazy.ink:233/img/background/75423183_p0.png', 'https://cdn.imlazy.ink:233/img/background/75393724_p0.png', 'https://cdn.imlazy.ink:233/img/background/75049773_p0.png', 'https://cdn.imlazy.ink:233/img/background/74526422_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/74502138_p0.png', 'https://cdn.imlazy.ink:233/img/background/74433388_p0.png', 'https://cdn.imlazy.ink:233/img/background/74433171_p0.png', 'https://cdn.imlazy.ink:233/img/background/74143874_p0.png', 'https://cdn.imlazy.ink:233/img/background/74090769_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/73923117_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/73739752_p0.png', 'https://cdn.imlazy.ink:233/img/background/73317886_p0.png', 'https://cdn.imlazy.ink:233/img/background/73048736_p0_master1200.jpg', 'https://cdn.imlazy.ink:233/img/background/72908383_p0.png', 'https://cdn.imlazy.ink:233/img/background/72858785_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/72731287_p0.png', 'https://cdn.imlazy.ink:233/img/background/72685722_p0_master1200.jpg', 'https://cdn.imlazy.ink:233/img/background/72346170_p0.png', 'https://cdn.imlazy.ink:233/img/background/72189536_p0.png', 'https://cdn.imlazy.ink:233/img/background/72068660_p0.png', 'https://cdn.imlazy.ink:233/img/background/72055179_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/71566096_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/70858371_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/70480754_p0.png', 'https://cdn.imlazy.ink:233/img/background/69824252_p0_master1200.jpg', 'https://cdn.imlazy.ink:233/img/background/69246838_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/69184576_p0.png', 'https://cdn.imlazy.ink:233/img/background/69045473_p0.png', 'https://cdn.imlazy.ink:233/img/background/68874698_p0.png', 'https://cdn.imlazy.ink:233/img/background/67882000_p0.png', 'https://cdn.imlazy.ink:233/img/background/67767892_p1.png', 'https://cdn.imlazy.ink:233/img/background/67492833_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/66987311_p0.png', 'https://cdn.imlazy.ink:233/img/background/66444938_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/65053285_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/65006441_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/64734435_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/64035231_p0.png', 'https://cdn.imlazy.ink:233/img/background/62471365_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/62299336_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/61edc8aed546f382335d9f721fa4d6a1.jpg', 'https://cdn.imlazy.ink:233/img/background/61597814_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/6008ef1edf1af5aa6381715ed711b05919c8d92a.jpg', 'https://cdn.imlazy.ink:233/img/background/5d69f2ac3989f.jpg', 'https://cdn.imlazy.ink:233/img/background/5a1e5a46a9ed0.jpg', 'https://cdn.imlazy.ink:233/img/background/5a1e5a424c5b3.jpg', 'https://cdn.imlazy.ink:233/img/background/59bc9a65212db.jpg', 'https://cdn.imlazy.ink:233/img/background/59b3a912c2f5e.jpg', 'https://cdn.imlazy.ink:233/img/background/59365ce9e5dbc.jpg', 'https://cdn.imlazy.ink:233/img/background/58103072_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/55647411_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/55485878_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/54341472_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/52261027_p0.png', 'https://cdn.imlazy.ink:233/img/background/44873217_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/34844544_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/343677.jpg', 'https://cdn.imlazy.ink:233/img/background/298322.jpg', 'https://cdn.imlazy.ink:233/img/background/298162.jpg', 'https://cdn.imlazy.ink:233/img/background/296970.jpg', 'https://cdn.imlazy.ink:233/img/background/295787.jpg', 'https://cdn.imlazy.ink:233/img/background/293718.jpg', 'https://cdn.imlazy.ink:233/img/background/292774.jpg', 'https://cdn.imlazy.ink:233/img/background/284740.jpg', 'https://cdn.imlazy.ink:233/img/background/271712.jpg', 'https://cdn.imlazy.ink:233/img/background/266298.jpg', 'https://cdn.imlazy.ink:233/img/background/257785.jpg', 'https://cdn.imlazy.ink:233/img/background/257762.jpg', 'https://cdn.imlazy.ink:233/img/background/240299.jpg', 'https://cdn.imlazy.ink:233/img/background/219020.jpg', 'https://cdn.imlazy.ink:233/img/background/1e64f65se4f6s51f.jpg', 'https://cdn.imlazy.ink:233/img/background/1561858527229.jpg', 'https://cdn.imlazy.ink:233/img/background/155c5ffcb3a.jpg', 'https://cdn.imlazy.ink:233/img/background/139-151222145036.jpg', 'https://cdn.imlazy.ink:233/img/background/121c9c1b617e4ac575668053444a374941f47e4e.jpg@1320w_742h.jpg', 'https://cdn.imlazy.ink:233/img/background/011be029e360608ebfc0c738eecaf55136583e31.png', 'https://s1.imlazy.ink:233/img/2021/05/22/2911f37cf900c20210522.jpg', 'https://s1.imlazy.ink:233/img/2021/03/27/5033646e8c26120210327.png', 'https://s1.imlazy.ink:233/img/2021/03/21/b425b8c956dcc20210321.png', 'https://cdn.imlazy.ink:233/img/background/101889696_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/104569091_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/104512163_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/85666262_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/104724685_p0.png', 'https://cdn.imlazy.ink:233/img/background/104443413_p0.png', 'https://cdn.imlazy.ink:233/img/background/93615741_p0.png', 'https://cdn.imlazy.ink:233/img/background/104923272_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103145145_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/88213931_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/103476483_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/63515165_p0.png', 'https://cdn.imlazy.ink:233/img/background/71801159_p0.png', 'https://cdn.imlazy.ink:233/img/background/105247731_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/105121561_p0.png', 'https://cdn.imlazy.ink:233/img/background/103015259_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/105262008_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/105325311_p0.png', 'https://cdn.imlazy.ink:233/img/background/105680405_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/105686601_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/92060022_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/90776365_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/104292729_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/106031896_p0.png', 'https://cdn.imlazy.ink:233/img/background/106047489_p0.png', 'https://cdn.imlazy.ink:233/img/background/72916889_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/FqngBGhaQAAb_-h.jpg', 'https://cdn.imlazy.ink:233/img/background/3e87cc0ec618f6fa0e4d31e76b3f8d227198052.jpg', 'https://cdn.imlazy.ink:233/img/background/106324062_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100244477_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/74130354_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/93595801_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/106449882_p0.png', 'https://cdn.imlazy.ink:233/img/background/101418711_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/106960624_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/99230581_p0.png', 'https://cdn.imlazy.ink:233/img/background/100808143_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/96533918_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/96467121_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/95468130_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/108438947_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/107267975_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/107463990_p0.png', 'https://cdn.imlazy.ink:233/img/background/107292114_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100066591_p0.png', 'https://cdn.imlazy.ink:233/img/background/95043974_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/86133109_p0.png', 'https://cdn.imlazy.ink:233/img/background/108750673_p0.png', 'https://cdn.imlazy.ink:233/img/background/108573665_p0.png', 'https://cdn.imlazy.ink:233/img/background/109254352_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/108297910_p0.png', 'https://cdn.imlazy.ink:233/img/background/FyeE-chagAAy15Z.jpg', 'https://cdn.imlazy.ink:233/img/background/110590121_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/100723659_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/110305269_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/110625684_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/110473958_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/205.png', 'https://cdn.imlazy.ink:233/img/background/111261733_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/109645355_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/111761592_p0.png', 'https://cdn.imlazy.ink:233/img/background/111679540_p0.png', 'https://cdn.imlazy.ink:233/img/background/108785352_p0.png', 'https://cdn.imlazy.ink:233/img/background/112081197_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/112060447_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/112167497_p0.png', 'https://cdn.imlazy.ink:233/img/background/112725088_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113135944_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113390096_p0.png', 'https://cdn.imlazy.ink:233/img/background/113486724_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/107871192_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113114668_p0.png', 'https://cdn.imlazy.ink:233/img/background/F_XtSZubkAAz2G5.jpg', 'https://cdn.imlazy.ink:233/img/background/F_8e382agAAIsZg.jpg', 'https://cdn.imlazy.ink:233/img/background/113904028_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/101123738_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/111214018_p0.png', 'https://cdn.imlazy.ink:233/img/background/86644511_p1.jpg', 'https://cdn.imlazy.ink:233/img/background/86644511_p3.jpg', 'https://cdn.imlazy.ink:233/img/background/114022535_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/114011526_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/114011113_p0.png', 'https://cdn.imlazy.ink:233/img/background/113793915_p0.png', 'https://cdn.imlazy.ink:233/img/background/113575664_p0.png', 'https://cdn.imlazy.ink:233/img/background/6292dfd98b8ea2a8a2e6112c1d9a25c914161457.jpg', 'https://cdn.imlazy.ink:233/img/background/114793143_p0.png', 'https://cdn.imlazy.ink:233/img/background/GCvEHCWagAEEP_j.jpg', 'https://cdn.imlazy.ink:233/img/background/GDDkPo_aIAAFxHN.jpg', 'https://cdn.imlazy.ink:233/img/background/105681177_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/97005099_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/114345595_p0.png', 'https://cdn.imlazy.ink:233/img/background/114533002_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/114644639_p0.png', 'https://cdn.imlazy.ink:233/img/background/114753990_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/115741092_p0.png', 'https://cdn.imlazy.ink:233/img/background/108359280_p0.png', 'https://cdn.imlazy.ink:233/img/background/115443925_p0.png', 'https://cdn.imlazy.ink:233/img/background/115598395_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113821366_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113845204_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/106403528_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/105537868_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/GD3_9qBaUAAHtsV_waifu2x_noise1_scale2x.png', 'https://cdn.imlazy.ink:233/img/background/GELbnOwagAAG817.jpg', 'https://cdn.imlazy.ink:233/img/background/GGX2g7tboAAELaU.jpg', 'https://cdn.imlazy.ink:233/img/background/116220536_p0.png', 'https://cdn.imlazy.ink:233/img/background/109945912_p0.png', 'https://cdn.imlazy.ink:233/img/background/109779549_p0.png', 'https://cdn.imlazy.ink:233/img/background/115230087_p0.png', 'https://cdn.imlazy.ink:233/img/background/113252900_p0.png', 'https://cdn.imlazy.ink:233/img/background/116239034_p1.png', 'https://cdn.imlazy.ink:233/img/background/GGiCR-Qa4AAopav.jpg', 'https://cdn.imlazy.ink:233/img/background/GHatlsCasAAHtT2.jpg', 'https://cdn.imlazy.ink:233/img/background/GHpxKLXa0AA5gNW.jpg', 'https://cdn.imlazy.ink:233/img/background/GH6IxAAaQAA-mpk.jpg', 'https://cdn.imlazy.ink:233/img/background/9af56a031b52d3f3e73c4808f0009a4b3546593915570307.jpg', 'https://cdn.imlazy.ink:233/img/background/116338291_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116635351_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116775242_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116776884_p0.png', 'https://cdn.imlazy.ink:233/img/background/GIcpme9akAE5rjf.jpg', 'https://cdn.imlazy.ink:233/img/background/116954812_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/GJhmRwjbYAAsMMo.jpg', 'https://cdn.imlazy.ink:233/img/background/GJbq6mGbwAAbOfZ.jpg', 'https://cdn.imlazy.ink:233/img/background/117580826_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116763500_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/117749579_p1.jpg', 'https://cdn.imlazy.ink:233/img/background/108627990_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/117971922_p0.png', 'https://cdn.imlazy.ink:233/img/background/117702106_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/64209157_p0.png', 'https://cdn.imlazy.ink:233/img/background/117987933_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/118359840_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/108489283_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/118456151_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/115557051_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/112545780_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/110503466_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/109102745_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/92ba8b4e0fef77aba9417e31c97543ab243986828.png', 'https://cdn.imlazy.ink:233/img/background/119141495_p0.png', 'https://cdn.imlazy.ink:233/img/background/116629910_p0.png', 'https://cdn.imlazy.ink:233/img/background/116333194_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/650b24f03ae8f1bbb571ac4feb9ba7f6136107.png', 'https://cdn.imlazy.ink:233/img/background/119558538_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/89fb4852b7c747126741b6bfcac6f094.png', 'https://cdn.imlazy.ink:233/img/background/119683453_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116001421_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/117847688_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/102049544_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/120269913_p0.png', 'https://cdn.imlazy.ink:233/img/background/GN8ItvxbEAAdrKS.png', 'https://cdn.imlazy.ink:233/img/background/GGr772taMAAwtb9.jpg', 'https://cdn.imlazy.ink:233/img/background/GUlugSubMAAwHCI.jpg', 'https://cdn.imlazy.ink:233/img/background/120474998_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/119929533_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/120828253_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/121202761_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/120854122_p0.png', 'https://cdn.imlazy.ink:233/img/background/122156399_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/122265245_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/110169154_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/113435171_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/116299462_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/121764304_p0.jpg', 'https://cdn.imlazy.ink:233/img/background/119986413_p1.jpg', 'https://cdn.imlazy.ink:233/img/background/122156399_p1.jpg', 'https://cdn.imlazy.ink:233/img/background/122026848_p0.jpg']
const randmusic=['https://yhsb.llmj.cloudns.ch/music/j.mp3','https://yhsb.llmj.cloudns.ch/music/n.mp3','https://yhsb.llmj.cloudns.ch/music/t.mp3','https://yhsb.llmj.cloudns.ch/music/m.mp3','https://yhsb.llmj.cloudns.ch/music/lq.mp3']
const randimg=['https://yhsb.llmj.cloudns.ch/picture/kunb.png','https://yhsb.llmj.cloudns.ch/picture/kun.png','https://yhsb.llmj.cloudns.ch/picture/memes.png','https://yhsb.llmj.cloudns.ch/picture/kunkun.png','https://yhsb.llmj.cloudns.ch/picture/lq.png']
const randtitle=['嘻嘻嘻','儿子回来啦','乌蒙山连着山外山','又是美好的一天','你还在等什么呢']
const timerun=['#aaffff','#00aaff','#0055ff','#0000ff']
const rand=Math.floor(Math.random()*apilists.length);
const ikun=document.getElementById("ikun");
const title=document.getElementById("(～￣▽￣)～");
const now=Math.floor(new Date().getHours()/6);
var audio=new Audio("https://yhsb.llmj.cloudns.ch/music/奢香夫人.mp3");
var ruingingaudio=false;
var ment=document.body;
ment.style.backgroundImage='url('+apilists[rand]+')';
function playaudio(){
	if (ruingingaudio)return;
	ruingingaudio=true;
	//我觉得它还可以处理一下音频
	var b=document.querySelector(".jump");
	b.style['animationName']='JUMP';
	setTimeout(()=>button.remove(),800);
	audio.currentTime=2;//125
	audio.loop=true;
	audio.play();}//因为开启动画是瞬间的，所以不用考虑先后
	
function kun(){
	const img=new Image();
	var speed=15;
	var randm=Math.floor(Math.random()*randmusic.length);
	var music=new Audio(randmusic[randm]);
	music.play()//先放音乐
	img.src=randimg[randm];
	ikun.width=window.innerWidth;
	ikun.height=window.innerHeight;
	var mykun=ikun.getContext("2d");
	var x=event.clientX;
	var y=event.clientY;
	var opacity=0;
	function jumpkun(){
		mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
		mykun.drawImage(img,x-50,y-50,100,100);
		y-=speed;
		opacity+=0.05
		speed-=1;
		if((y+50)>window.innerHeight-250&&x<280){
			mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
			return;}
		if(speed<0){
			drawkun();
			return
		}
		else{requestAnimationFrame(jumpkun);}
	}
	function drawkun(){
		mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
		mykun.drawImage(img,x-50,y-50,100,100);
		ikun.style.opacity=opacity;
		y+=speed;
		//opacity+=0.05;
		speed+=1;
		if(y+50>window.innerHeight){
			speed=-20;//速度，控制下落
		}
		if((y+50)>window.innerHeight-250&&x<280){
			mykun.clearRect(0,0,window.innerWidth,window.innerHeight);
			return;}
		else{requestAnimationFrame(drawkun);}
	}jumpkun();//IKUN!！！！！！
}

function change(){
	if(document.hidden){
		audio.pause();
		title.textContent="(っ °Д °;)不要走";
	}
	else{
		audio.play();
		var randm=Math.floor(Math.random()*randtitle.length)
		title.textContent="(～￣▽￣)～"+randtitle[randm];
	}
}
function date(){
	var a=document.querySelectorAll("a");
	var link=document.querySelectorAll("#link");
	a.forEach((css)=>{
		if (css.id!="title"){
			css.style.color=timerun[now];
			css.addEventListener('mouseover',()=>css.style.color="#ff0000");
			css.addEventListener('mouseout',()=>css.style.color=timerun[now]);
		}});
	link.forEach((css)=>{
		css.style.color=timerun[now];
		css.addEventListener('mouseout',()=>css.style.color=timerun[now]);
		});
}
//识别炎拳
var button=document.getElementById("炎拳");
button.addEventListener('click',playaudio);
//ikun
document.addEventListener('click',kun);
//下载壁纸
var download=document.getElementById("title");
var text=download.textContent;
download.href=apilists[rand];
download.addEventListener('mouseover',()=>download.textContent="下载壁纸");
download.addEventListener('mouseout',()=>download.textContent=text);
//(～￣▽￣)～
document.addEventListener('visibilitychange',change);
//按时间变颜色
date();
