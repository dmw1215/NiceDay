﻿/*
 *
 *
脚本功能：水蜜桃解锁会员
软件版本：2.1.1
下载地址：https://shrtm.nu/peach
脚本作者：我的脚会流汁
更新时间：2021-11-12

使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 水蜜桃解锁会员
^https?:\/\/api\.mtaoapi006\.\w{3,4}:\d{4}\/api\.php\/api\/users\/getBaseInfo url script-response-body https://raw.githubusercontent.com/dmw1215/NiceDay/main/Cracks/PeachCrack.js

[mitm]
 
hostname = *.mtaoapi*
*
*
*/


var obj = JSON.parse($response.body);
    
    obj.data = "FF13FF046B7A8E10A33A54FEF30603A62005ACFB40092BCD11DBC8DE370D0C24C7A9D7AB758815014C0B2FED84FC4110E197FA0E56E731F8439C06ABD2942A064ABEE8215A1F53A5504FE267905CC7D364F1355904FA939E9A3C5ABCA4B4522A4B986BA60A4A17B6E7E2B4AFDC7AB5AD24916A13C181916988AF7E65ED046783036A885C0453C96AB1A10A67601814F4AA06E763E2997651835A8BBE603DEC7DD1D89ED4AB1FDC26CCAC96D3F01001A9453B0FF12C1245FECF581B3B506A765AC7EA6CD35EB99439EA3F2906284F8A42200280214B158C5D3C6DDE214238925A7F8EC4B48F1BD1DF37D943997F7F403ABC01D833470B42A210849FCDBACDD236062A58FDA7CA79ABB914FA0FC2E9715142D3A460B8A3189606585D8A47057D33CADFBF625937FB054CA783C414BCCDDE9AEFB08E21A960DD96105E21E089C7EC283B3A813E8AEF5ABE7755183F5638964E5A3349ACA5E1A4778302026E639B26C6CDA4D6AA9F84837FB4DC70F7ABC3E046ADDA148763F118E231B90B4FAD708BC8B3DF53B300D1ABC0178D30FB14941715982BC981CF18E915F173A3C503F25B91E26C6E9F3D7286A866546FACFFAC009E931B127AC563669F5029FC7C2A836717AC946D701069D4B191AD07AA60E4E26DB274710ACE5F1D8429F5281E83F0462E28D852797C2B8EE93F78095649D998868109DD60C99AD5BA9373B1248197099ECA72F8B41ED10F7698A85BED7258F6DBE701D31B6B250546E4D368ED61FBF2605F35EB319B21BFA7E8D919D977C937EB40DB7C8A6775D7FBEA4F0FD261E80DAEB1B8DA5A749E94278D02E6F2DE3A5405A734343A78EB3E5A3BAA166CA9459A182DDF619AAD6B5DDC419967F70782962E3CC2EA1CE49FCF8A5F241DF9DD57F7F23129CC5039353A72308D27495D63040300191480E0D23E2991E905CD5D978AF2AB7EB54DF26FD79F676777474F9B74F88D36E4E2AE6A1B901753CCA80F149F46778421A6E7852C0B338A3FE8962BE31956DC639B61C3583E93F31E10A497FC7AE64812A0BE71D32AD0FA0C55E836377AE4F7CA3B82A73A7D03A23005043C2F11BEA41E01952CAAC660E97DDEC5E634F9A9A619A27C7495EFA8E160CC9F70F94BCF5BAA4663DFA493C98CA016E8B49492566E7F17BE3C299C40359D3A943A0FA4A0787066244C1A67438B460DF7789A10B35E019C5FDE7E146EE53C1679E0188D93627DA9AFB06FF2574066FB77345BE9559D396E1BDE04AB692B7FAB5860FBAC3CC5571525BD26F6BB7C22A7E2649780276C06B9F19192D632B5D19F52F002E4120F871FE1A5A8C146727C78B3FD2495284B6CC090345E6AEAC7BB887D38FDE5CE9622E558003E19F1DE7E515296D0718E9915175F384CCCDD393DBF0C991535CB3615378EC76F601533E878CE20EFCAF6D7988BC8F9A9D72A007FD9A69C4B1512F6203FD2512D6CED26F171E23266A95218216DC1DAE1AED400301255BE777FABA9079BC463592BCA495189142C6DA2103AB538029CCE1CE984B7835BC063EB77D6F5A37B036C21D5C5C3AC107DDEA7E57681ED8A2527B78FB0F789E4DA613C35AD7677194D71793733FB614C82CD2E871EE3A77E2BB5ADBBDB4BA454E144B8BE5511DFB4BF9963AFB54FE545656F67637F399DE2994427EF3F41D9D7F557F10D74E423F72E535FF652C3093A2A29974D2F555FE55B913A3D06F18489BD9370D67DDC3725E3720F143ADCCE71B68680277D2800F645FF871ACF23C84BD00EC0C0053AA09CE2FC683CF8618968A4D8D7C57AFD76B2943AA3ED1B8502482044E193E244B918D3972EE3BB6196B303D1AB88145EDA1EE10354B429668389E8C5F7F193BA360BCD96BC8712D4FC901E3D3DFBFD59044789BB6CD9E64ACDD78AA9EA3F1E23C057D5192950BF70568F25662D8AC3173234F3DE26C43DA233CEF0F1E80C3A18E38E898EAEDCE662521ED0F8EE1E2C2FED430769728F3C5DFE1C6F1BEA6858B57A4CDB536269252047D645207AF1377C5C0D57DB7A3DC0D4C68E576F6B1349A8A47520B7CDC7B299BD969D122722CDBDD7E36B04EA70896EAB1380ADAFD299B4862AF0AF97C9A677704C878745128B0E8865C59700D4B46234163B1912DFA94DEB5FB8FA480F9C3FFD6D594B895A12202D8E217C897904017C578882217B9F74E00150B43A53D0E1B44EEB31907AD17D40FCF3C98795164A1882470C092A933816B4F9613D877E0D069002A05E5D7CD2AF90EF6FAD1DD6AF97D41C616F49243A01C8A72EB22E66D5C12A68DDC375BE80A80F8F51DAF794514D5A3083A887C5461FBFC5FD4A7FCD78B6D90FF90BA0FDA92517BA662620F357CA97D1FFA1452B996700A1E915A9F9F85F055A9082E228B41EA3015647665652EC08B00D67203B33BA5897064BE1CBD5137C840DB3EB94AA976CA1FEC84B8E576709A030E2FAC9E3BC8B8D92D20FBED7AEBE17BDF8758F1FD6CA16B35796A7A1B2A224E21FB844420DD132C75D2BCE4288A34D7BFAB318180F5E5A1A815DA37CE1B056CC713A5B222E8C777DD3C025ACED54A7B44930C54F67E1EE36295C6AB202F1D58043685033578F46A3D8F1336823774960A008C9A9B0D15B5943C1BBB6591AD74D5F8F1B6159A8E944C96FF1AA3969EBAEB87F4DE4701641DE43280AE2AAEE596EA4FCD109ADA9844618C26E5523C4130BA5D87D98EACED4107EF0E21D9355AC3CF55243FC99114D92E3B1E75BD4B63CDAD3D79234E9D4116C1637E03DCB65BCE738ECE3EBE12A341D4998B01FA9EAE48E3B49EA9F74F492201137F7E6DCAAD22FD243B90695C5DF8A8DCB60196A2389FF1F869B1A544F88F393FC12163D55DF7A7D00B0AF325855AC1056C55A7A8A2E29BC8D2A3D8F54FDEA2EBD4FEE043A755D821CE70817A55E666AA5EDC3DA10399625D904BE7E10E3334D403A7F8917A6682A710CE2FC3D2FBC2547CB34487F67AA553F119B";

$done({
        body : JSON.stringify(obj)
});