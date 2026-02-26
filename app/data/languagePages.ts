export interface LanguagePageData {
  slug: string;
  language: string;
  nativeLanguage: string;
  heroTitle: string;
  heroDescription: string;
  ctaText: string;
  viewTemplatesText: string;
  featureBar: {
    noRegistration: string;
    noRegistrationSub: string;
    templates: string;
    templatesSub: string;
    download: string;
    downloadSub: string;
  };
  templateSection: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  whatItDoes: {
    title: string;
    paragraphs: string[];
  };
  targetAudience: {
    title: string;
    intro: string;
    items: string[];
    outro: string;
  };
  communityTemplates: {
    title: string;
    description: string;
  };
  biodataFormat: {
    title: string;
    description: string;
    sections: { title: string; text: string }[];
  };
  whyChooseUs: {
    title: string;
    description: string;
    features: string[];
  };
  tips: {
    title: string;
    description: string;
    dosTitle: string;
    dos: string[];
    dontsTitle: string;
    donts: string[];
  };
  faq: {
    title: string;
    items: { question: string; answer: string }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
  };
  finalCta: {
    title: string;
    description: string;
    buttonText: string;
  };
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const languagePages: Record<string, LanguagePageData> = {
  "marathi-biodata": {
    slug: "marathi-biodata",
    language: "Marathi",
    nativeLanguage: "मराठी",
    heroTitle: "Marathi Biodata Maker | लग्नासाठी मराठी बायोडाटा",
    heroDescription:
      "मराठी बायोडाटा मेकर वापरून काही मिनिटांत लग्नासाठी मराठी बायोडाटा तयार करा. मराठी बायोडाटा फॉरमॅट निवडा, तुमची माहिती भरा आणि बायोडाटा PDF, Word किंवा Image मध्ये डाउनलोड करा. कोणतीही रेजिस्ट्रेशन आवश्यक नाही.",
    ctaText: "Create Marathi Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "लोकप्रिय मराठी बायोडाटा टेम्प्लेट्स",
      subtitle: "लग्नासाठी सुंदर आणि पारंपारिक मराठी बायोडाटा फॉरमॅट निवडा",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "मराठी बायोडाटा मेकर काय करतो?",
      paragraphs: [
        "मराठी बायोडाटा मेकर हा विशेषतः मराठी कुटुंबांसाठी लग्नासाठी बायोडाटा तयार करण्यासाठी डिझाइन केलेला आहे. सर्व उपलब्ध बायोडाटा फॉरमॅट पारंपारिक आणि आधुनिक मराठी विवाह आवश्यकतांचे पालन करतात.",
        "वापरकर्ते सहजपणे वैयक्तिक, शैक्षणिक, व्यावसायिक आणि कौटुंबिक माहिती भरू शकतात, बायोडाटा पूर्वावलोकन करू शकतात आणि PDF, Word किंवा Image फॉरमॅटमध्ये डाउनलोड करू शकतात.",
      ],
    },
    targetAudience: {
      title: "हा मराठी बायोडाटा मेकर कोणासाठी आहे?",
      intro: "हा मराठी बायोडाटा मेकर यासाठी आदर्श आहे:",
      items: [
        "लग्नासाठी स्वतःचा मराठी बायोडाटा तयार करणारे",
        "मुलगा किंवा मुलीसाठी बायोडाटा तयार करणारे पालक",
        "तयार बायोडाटा फॉरमॅट शोधणारे व्यावसायिक",
        "लग्नाच्या चर्चेसाठी बायोडाटा शेअर करणारी कुटुंबे",
      ],
      outro:
        "फॉरमॅट वाचण्यास सोपे, समजण्यास सोपे आणि लग्नाच्या चर्चेदरम्यान सामान्य अपेक्षा पूर्ण करण्यासाठी डिझाइन केलेले आहेत.",
    },
    communityTemplates: {
      title: "मराठी विवाह बायोडाटा टेम्प्लेट्स",
      description:
        "आम्ही मराठी समुदायासाठी विशेष विवाह बायोडाटा टेम्प्लेट्स प्रदान करतो. प्रत्येक टेम्प्लेट वाचण्यास सोपा आहे आणि सर्व महत्त्वाच्या तपशीलांचा समावेश आहे.",
    },
    biodataFormat: {
      title: "मराठी बायोडाटा फॉरमॅट समजून घ्या",
      description:
        "चांगला बायोडाटा फॉरमॅट इतरांना तुमची माहिती सहज समजण्यास मदत करतो.",
      sections: [
        {
          title: "मराठी बायोडाटामध्ये काय समाविष्ट करावे",
          text: "मराठी विवाह बायोडाटामध्ये सामान्यतः वैयक्तिक माहिती, शिक्षण, नोकरी, कौटुंबिक पार्श्वभूमी, छंद आणि संपर्क माहिती समाविष्ट असते.",
        },
        {
          title: "Word किंवा PDF - कोणते निवडावे?",
          text: "Word फॉरमॅट संपादनासाठी उपयुक्त आहे. PDF फॉरमॅट शेअर करण्यासाठी आणि प्रिंट करण्यासाठी चांगले आहे.",
        },
        {
          title: "सोपा आणि स्वच्छ बायोडाटा लेआउट",
          text: "प्रत्येक बायोडाटा टेम्प्लेट सोपा आणि नीटनेटका ठेवला आहे जेणेकरून सर्व माहिती वाचण्यास सोपी असेल.",
        },
      ],
    },
    whyChooseUs: {
      title: "आमच्या मराठी बायोडाटा मेकरसह काय मिळते",
      description:
        "आमचा बायोडाटा मेकर तुम्हाला स्वच्छ आणि वाचण्यास सोपा मराठी विवाह बायोडाटा तयार करण्यासाठी सर्व आवश्यक गोष्टी देतो.",
      features: [
        "वापरण्यास सोपे: तपशील भरा आणि बायोडाटा तयार",
        "25+ टेम्प्लेट्स: विविध समुदायांसाठी",
        "PDF डाउनलोड: PDF म्हणून बायोडाटा डाउनलोड करा",
        "Word डाउनलोड: संपादनासाठी Word फॉरमॅट",
        "फोटो अपलोड: बायोडाटामध्ये फोटो जोडा",
        "मराठी भाषा: संपूर्ण मराठी भाषेत उपलब्ध",
        "तत्काळ डाउनलोड: लगेच डाउनलोड करा",
        "खाजगी आणि सुरक्षित: तुमची माहिती कोणाशीही शेअर केली जात नाही",
      ],
    },
    tips: {
      title: "चांगला मराठी विवाह बायोडाटा तयार करण्यासाठी टिप्स",
      description:
        "या सोप्या टिप्स तुम्हाला स्पष्ट आणि वाचण्यास सोपा बायोडाटा तयार करण्यास मदत करू शकतात.",
      dosTitle: "काय करावे",
      dos: [
        "अलीकडील आणि स्पष्ट फोटो वापरा",
        "योग्य आणि प्रामाणिक माहिती द्या",
        "कौटुंबिक पार्श्वभूमी माहिती जोडा",
        "बायोडाटा लहान आणि नीटनेटका ठेवा",
      ],
      dontsTitle: "काय टाळावे",
      donts: [
        "जुने किंवा अस्पष्ट फोटो टाळा",
        "माहिती अतिशयोक्ती करू नका",
        "अनावश्यक माहिती टाळा",
        "बायोडाटा खूप लांब करू नका",
      ],
    },
    faq: {
      title: "मराठी बायोडाटा मेकर बद्दल सामान्य प्रश्न",
      items: [
        {
          question: "मराठी विवाह बायोडाटा म्हणजे काय?",
          answer:
            "मराठी विवाह बायोडाटा हा एक दस्तऐवज आहे ज्यामध्ये वैयक्तिक माहिती, कौटुंबिक पार्श्वभूमी, शिक्षण आणि व्यवसाय यासारख्या आवश्यक तपशीलांचा समावेश असतो.",
        },
        {
          question: "मराठी बायोडाटा ऑनलाइन कसा बनवावा?",
          answer:
            "आमचा मराठी बायोडाटा मेकर वापरा, बायोडाटा फॉरमॅट निवडा, माहिती भरा, पूर्वावलोकन करा आणि PDF किंवा Word मध्ये डाउनलोड करा.",
        },
      ],
    },
    testimonials: {
      title: "वापरकर्ते काय म्हणतात",
      subtitle:
        "आमचा मराठी बायोडाटा मेकर वापरल्यानंतर लोक काय म्हणतात",
    },
    finalCta: {
      title: "तुमचा मराठी विवाह बायोडाटा तयार करायला तयार?",
      description:
        "आजच सोप्या, विश्वासार्ह आणि वापरण्यास तयार फॉरमॅट वापरून तुमचा मराठी विवाह बायोडाटा तयार करा.",
      buttonText: "बायोडाटा तयार करा",
    },
    metadata: {
      title:
        "Marathi Biodata Maker | मराठी बायोडाटा | Create Marathi Marriage Biodata Online Free",
      description:
        "Create Marathi marriage biodata online free. Use Marathi Biodata Maker to make biodata for marriage in Marathi and download in PDF, Word or Image format.",
      keywords:
        "marathi biodata, marathi biodata maker, marathi marriage biodata, marathi biodata format, marathi biodata for marriage, लग्नासाठी मराठी बायोडाटा",
    },
  },

  "gujarati-biodata": {
    slug: "gujarati-biodata",
    language: "Gujarati",
    nativeLanguage: "ગુજરાતી",
    heroTitle: "Gujarati Biodata Maker | લગ્ન માટે ગુજરાતી બાયોડેટા",
    heroDescription:
      "ગુજરાતી બાયોડેટા મેકર વાપરીને થોડી મિનિટોમાં લગ્ન માટે ગુજરાતી બાયોડેટા બનાવો. ગુજરાતી બાયોડેટા ફોર્મેટ પસંદ કરો, તમારી માહિતી ભરો અને PDF, Word અથવા Image માં ડાઉનલોડ કરો.",
    ctaText: "Create Gujarati Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "લોકપ્રિય ગુજરાતી બાયોડેટા ટેમ્પ્લેટ્સ",
      subtitle: "લગ્ન માટે સુંદર અને પરંપરાગત ગુજરાતી બાયોડેટા ફોર્મેટ પસંદ કરો",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "ગુજરાતી બાયોડેટા મેકર શું કરે છે?",
      paragraphs: [
        "ગુજરાતી બાયોડેટા મેકર ખાસ કરીને ગુજરાતી પરિવારો માટે લગ્ન માટે બાયોડેટા બનાવવા માટે ડિઝાઇન કરવામાં આવ્યો છે.",
        "વપરાશકર્તાઓ સરળતાથી વ્યક્તિગત, શૈક્ષણિક, વ્યાવસાયિક અને પારિવારિક માહિતી ભરી શકે છે અને PDF, Word અથવા Image ફોર્મેટમાં ડાઉનલોડ કરી શકે છે.",
      ],
    },
    targetAudience: {
      title: "આ ગુજરાતી બાયોડેટા મેકર કોના માટે છે?",
      intro: "આ ગુજરાતી બાયોડેટા મેકર આ લોકો માટે આદર્શ છે:",
      items: [
        "લગ્ન માટે પોતાનો ગુજરાતી બાયોડેટા બનાવનારા",
        "દીકરા અથવા દીકરી માટે બાયોડેટા બનાવનારા માતા-પિતા",
        "તૈયાર બાયોડેટા ફોર્મેટ શોધનારા વ્યાવસાયિકો",
        "લગ્નની ચર્ચા માટે બાયોડેટા શેર કરનારા પરિવારો",
      ],
      outro: "ફોર્મેટ વાંચવામાં સરળ અને સમજવામાં સરળ છે.",
    },
    communityTemplates: {
      title: "ગુજરાતી લગ્ન બાયોડેટા ટેમ્પ્લેટ્સ",
      description:
        "અમે ગુજરાતી સમુદાય માટે ખાસ લગ્ન બાયોડેટા ટેમ્પ્લેટ્સ પ્રદાન કરીએ છીએ.",
    },
    biodataFormat: {
      title: "ગુજરાતી બાયોડેટા ફોર્મેટ સમજો",
      description: "સારો બાયોડેટા ફોર્મેટ બીજાઓને તમારી માહિતી સરળતાથી સમજવામાં મદદ કરે છે.",
      sections: [
        {
          title: "ગુજરાતી બાયોડેટામાં શું સામેલ કરવું",
          text: "વ્યક્તિગત માહિતી, શિક્ષણ, નોકરી, પારિવારિક પૃષ્ઠભૂમિ, શોખ અને સંપર્ક માહિતી.",
        },
        {
          title: "Word અથવા PDF - કયું પસંદ કરવું?",
          text: "Word ફોર્મેટ સંપાદન માટે ઉપયોગી છે. PDF ફોર્મેટ શેર કરવા અને પ્રિન્ટ કરવા માટે સારું છે.",
        },
        {
          title: "સરળ અને સ્વચ્છ બાયોડેટા લેઆઉટ",
          text: "દરેક ટેમ્પ્લેટ સરળ અને સુઘડ રાખવામાં આવ્યો છે.",
        },
      ],
    },
    whyChooseUs: {
      title: "અમારા ગુજરાતી બાયોડેટા મેકર સાથે શું મળે",
      description: "સ્વચ્છ અને વાંચવામાં સરળ ગુજરાતી લગ્ન બાયોડેટા બનાવવા માટે બધું.",
      features: [
        "વાપરવામાં સરળ: માહિતી ભરો અને બાયોડેટા તૈયાર",
        "25+ ટેમ્પ્લેટ્સ: વિવિધ સમુદાયો માટે",
        "PDF ડાઉનલોડ: PDF તરીકે ડાઉનલોડ કરો",
        "Word ડાઉનલોડ: સંપાદન માટે Word ફોર્મેટ",
        "ફોટો અપલોડ: બાયોડેટામાં ફોટો ઉમેરો",
        "ગુજરાતી ભાષા: સંપૂર્ણ ગુજરાતી ભાષામાં ઉપલબ્ધ",
        "તાત્કાલિક ડાઉનલોડ: તરત જ ડાઉનલોડ કરો",
        "ખાનગી અને સુરક્ષિત: તમારી માહિતી કોઈની સાથે શેર કરવામાં આવતી નથી",
      ],
    },
    tips: {
      title: "સારો ગુજરાતી લગ્ન બાયોડેટા બનાવવા માટે ટિપ્સ",
      description: "આ સરળ ટિપ્સ સ્પષ્ટ અને વાંચવામાં સરળ બાયોડેટા બનાવવામાં મદદ કરી શકે છે.",
      dosTitle: "શું કરવું",
      dos: [
        "તાજેતરનો અને સ્પષ્ટ ફોટો વાપરો",
        "યોગ્ય અને પ્રામાણિક માહિતી આપો",
        "પારિવારિક પૃષ્ઠભૂમિ માહિતી ઉમેરો",
        "બાયોડેટા ટૂંકો અને સુઘડ રાખો",
      ],
      dontsTitle: "શું ટાળવું",
      donts: [
        "જૂના અથવા અસ્પષ્ટ ફોટો ટાળો",
        "માહિતીમાં અતિશયોક્તિ ન કરો",
        "બિનજરૂરી માહિતી ટાળો",
        "બાયોડેટા ખૂબ લાંબો ન બનાવો",
      ],
    },
    faq: {
      title: "ગુજરાતી બાયોડેટા મેકર વિશે સામાન્ય પ્રશ્નો",
      items: [
        {
          question: "ગુજરાતી લગ્ન બાયોડેટા શું છે?",
          answer: "ગુજરાતી લગ્ન બાયોડેટા એ એક દસ્તાવેજ છે જેમાં વ્યક્તિગત માહિતી, પારિવારિક પૃષ્ઠભૂમિ, શિક્ષણ અને વ્યવસાય જેવી આવશ્યક વિગતો છે.",
        },
        {
          question: "ગુજરાતી બાયોડેટા ઓનલાઈન કેવી રીતે બનાવવો?",
          answer: "અમારો ગુજરાતી બાયોડેટા મેકર વાપરો, ફોર્મેટ પસંદ કરો, માહિતી ભરો અને PDF અથવા Word માં ડાઉનલોડ કરો.",
        },
      ],
    },
    testimonials: {
      title: "વપરાશકર્તાઓ શું કહે છે",
      subtitle: "અમારો ગુજરાતી બાયોડેટા મેકર વાપર્યા પછી લોકો શું કહે છે",
    },
    finalCta: {
      title: "તમારો ગુજરાતી લગ્ન બાયોડેટા બનાવવા તૈયાર?",
      description: "આજે જ સરળ ફોર્મેટ વાપરીને તમારો ગુજરાતી લગ્ન બાયોડેટા બનાવો.",
      buttonText: "બાયોડેટા બનાવો",
    },
    metadata: {
      title: "Gujarati Biodata Maker | ગુજરાતી બાયોડેટા | Create Gujarati Marriage Biodata Online Free",
      description: "Create Gujarati marriage biodata online free. Download in PDF, Word or Image format.",
      keywords: "gujarati biodata, gujarati biodata maker, gujarati marriage biodata, ગુજરાતી બાયોડેટા",
    },
  },

  "english-biodata": {
    slug: "english-biodata",
    language: "English",
    nativeLanguage: "English",
    heroTitle: "English Biodata Maker | Create Marriage Biodata in English",
    heroDescription:
      "Create professional marriage biodata in English using our free biodata maker. Choose from beautiful templates, fill in your details, and download your biodata in PDF, Word, or Image format instantly. No registration needed.",
    ctaText: "Create English Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "Popular English Biodata Templates",
      subtitle: "Beautiful and professional English biodata formats for marriage",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "What Does the English Biodata Maker Do?",
      paragraphs: [
        "The English Biodata Maker is designed to help you create a professional marriage biodata in English. All templates follow modern and widely accepted formats suitable for marriage proposals.",
        "Fill in your personal, educational, professional, and family details, preview your biodata in real time, and download it in PDF, Word, or Image format.",
      ],
    },
    targetAudience: {
      title: "Who Is This English Biodata Maker For?",
      intro: "This English biodata maker is ideal for:",
      items: [
        "Individuals preparing their own marriage biodata in English",
        "Parents creating biodata for their son or daughter",
        "Working professionals looking for ready-to-use English biodata formats",
        "Families sharing biodata for marriage discussions and proposals",
      ],
      outro: "The formats are easy to read, simple to understand, and designed to meet common expectations.",
    },
    communityTemplates: {
      title: "English Marriage Biodata Templates",
      description: "We provide professional English marriage biodata templates suitable for all communities and backgrounds.",
    },
    biodataFormat: {
      title: "Understanding English Biodata Format",
      description: "A good biodata format helps others understand your details easily.",
      sections: [
        {
          title: "What to Include in an English Biodata",
          text: "Personal details, education, occupation, family background, hobbies, and contact information.",
        },
        {
          title: "Word or PDF - Which to Choose?",
          text: "Word format is useful for editing. PDF format is better for sharing and printing.",
        },
        {
          title: "Simple and Clean Biodata Layout",
          text: "Each template is kept simple and neat so all details are easy to read.",
        },
      ],
    },
    whyChooseUs: {
      title: "What You Get with Our English Biodata Maker",
      description: "Everything you need to create a clean and professional English marriage biodata.",
      features: [
        "Easy to Use: Fill in your details and your biodata is ready",
        "25+ Templates: For different communities and styles",
        "PDF Download: Download your biodata as PDF",
        "Word Download: Get your biodata in Word format for editing",
        "Photo Upload: Add your photo to the biodata",
        "English Language: Professional English biodata",
        "Instant Download: Download immediately",
        "Private & Safe: Your details are not shared with anyone",
      ],
    },
    tips: {
      title: "Tips for Creating a Good English Marriage Biodata",
      description: "These simple tips can help you create a clear and professional biodata.",
      dosTitle: "What You Should Do",
      dos: [
        "Use a recent and clear photo",
        "Share correct and honest details",
        "Add family background information",
        "Keep the biodata short and neat",
      ],
      dontsTitle: "What You Should Avoid",
      donts: [
        "Avoid old or unclear photos",
        "Don't exaggerate your details",
        "Avoid unnecessary information",
        "Don't make the biodata too long",
      ],
    },
    faq: {
      title: "Common Questions About English Biodata Maker",
      items: [
        {
          question: "What is a marriage biodata in English?",
          answer: "A marriage biodata in English is a document containing personal information, family background, education, and profession details used during marriage proposals.",
        },
        {
          question: "How to create an English biodata online?",
          answer: "Use our English Biodata Maker, choose a template, fill in your details, preview, and download in PDF or Word format.",
        },
      ],
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Here's what people say after using our English Biodata Maker",
    },
    finalCta: {
      title: "Ready to Create Your English Marriage Biodata?",
      description: "Start creating your professional English marriage biodata today.",
      buttonText: "Start Creating Biodata",
    },
    metadata: {
      title: "English Biodata Maker | Create English Marriage Biodata Online Free",
      description: "Create professional English marriage biodata online free. Download in PDF, Word or Image format.",
      keywords: "english biodata, english biodata maker, english marriage biodata, biodata in english",
    },
  },

  "bengali-biodata": {
    slug: "bengali-biodata",
    language: "Bengali",
    nativeLanguage: "বাংলা",
    heroTitle: "Bengali Biodata Maker | বিবাহের জন্য বাংলা বায়োডাটা",
    heroDescription:
      "বাংলা বায়োডাটা মেকার ব্যবহার করে কয়েক মিনিটে বিবাহের জন্য বাংলা বায়োডাটা তৈরি করুন। বাংলা বায়োডাটা ফরম্যাট নির্বাচন করুন, আপনার তথ্য পূরণ করুন এবং PDF, Word বা Image তে ডাউনলোড করুন।",
    ctaText: "Create Bengali Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "জনপ্রিয় বাংলা বায়োডাটা টেম্পলেট",
      subtitle: "বিবাহের জন্য সুন্দর এবং ঐতিহ্যবাহী বাংলা বায়োডাটা ফরম্যাট নির্বাচন করুন",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "বাংলা বায়োডাটা মেকার কী করে?",
      paragraphs: [
        "বাংলা বায়োডাটা মেকার বিশেষভাবে বাংলা পরিবারের জন্য বিবাহের বায়োডাটা তৈরি করতে ডিজাইন করা হয়েছে।",
        "ব্যবহারকারীরা সহজেই ব্যক্তিগত, শিক্ষাগত, পেশাগত এবং পারিবারিক তথ্য পূরণ করতে পারেন এবং PDF, Word বা Image ফরম্যাটে ডাউনলোড করতে পারেন।",
      ],
    },
    targetAudience: {
      title: "এই বাংলা বায়োডাটা মেকার কাদের জন্য?",
      intro: "এই বাংলা বায়োডাটা মেকার আদর্শ:",
      items: [
        "বিবাহের জন্য নিজের বাংলা বায়োডাটা তৈরি করতে চান যারা",
        "ছেলে বা মেয়ের জন্য বায়োডাটা তৈরি করতে চান এমন অভিভাবক",
        "রেডিমেড বায়োডাটা ফরম্যাট খুঁজছেন এমন পেশাদার",
        "বিবাহের আলোচনার জন্য বায়োডাটা শেয়ার করতে চান এমন পরিবার",
      ],
      outro: "ফরম্যাটগুলি পড়তে সহজ এবং বোঝতে সহজ।",
    },
    communityTemplates: {
      title: "বাংলা বিবাহ বায়োডাটা টেম্পলেট",
      description: "আমরা বাংলা সম্প্রদায়ের জন্য বিশেষ বিবাহ বায়োডাটা টেম্পলেট প্রদান করি।",
    },
    biodataFormat: {
      title: "বাংলা বায়োডাটা ফরম্যাট বুঝুন",
      description: "ভালো বায়োডাটা ফরম্যাট অন্যদের আপনার তথ্য সহজে বুঝতে সাহায্য করে।",
      sections: [
        {
          title: "বাংলা বায়োডাটায় কী অন্তর্ভুক্ত করবেন",
          text: "ব্যক্তিগত তথ্য, শিক্ষা, চাকরি, পারিবারিক পটভূমি, শখ এবং যোগাযোগের তথ্য।",
        },
        {
          title: "Word বা PDF - কোনটি বেছে নেবেন?",
          text: "Word ফরম্যাট সম্পাদনার জন্য উপযোগী। PDF ফরম্যাট শেয়ার এবং প্রিন্ট করার জন্য ভালো।",
        },
        {
          title: "সহজ এবং পরিষ্কার বায়োডাটা লেআউট",
          text: "প্রতিটি টেম্পলেট সহজ এবং পরিপাটি রাখা হয়েছে।",
        },
      ],
    },
    whyChooseUs: {
      title: "আমাদের বাংলা বায়োডাটা মেকারে কী পাবেন",
      description: "পরিষ্কার এবং পড়তে সহজ বাংলা বিবাহ বায়োডাটা তৈরি করতে সবকিছু।",
      features: [
        "ব্যবহার করতে সহজ: তথ্য পূরণ করুন এবং বায়োডাটা তৈরি",
        "25+ টেম্পলেট: বিভিন্ন সম্প্রদায়ের জন্য",
        "PDF ডাউনলোড: PDF হিসেবে ডাউনলোড করুন",
        "Word ডাউনলোড: সম্পাদনার জন্য Word ফরম্যাট",
        "ফটো আপলোড: বায়োডাটায় ফটো যোগ করুন",
        "বাংলা ভাষা: সম্পূর্ণ বাংলা ভাষায় উপলব্ধ",
        "তাৎক্ষণিক ডাউনলোড: সঙ্গে সঙ্গে ডাউনলোড করুন",
        "ব্যক্তিগত এবং নিরাপদ: আপনার তথ্য কারো সাথে শেয়ার করা হয় না",
      ],
    },
    tips: {
      title: "ভালো বাংলা বিবাহ বায়োডাটা তৈরির টিপস",
      description: "এই সহজ টিপস স্পষ্ট এবং পড়তে সহজ বায়োডাটা তৈরি করতে সাহায্য করতে পারে।",
      dosTitle: "কী করবেন",
      dos: [
        "সাম্প্রতিক এবং স্পষ্ট ফটো ব্যবহার করুন",
        "সঠিক এবং সৎ তথ্য দিন",
        "পারিবারিক পটভূমি তথ্য যোগ করুন",
        "বায়োডাটা সংক্ষিপ্ত এবং পরিপাটি রাখুন",
      ],
      dontsTitle: "কী এড়িয়ে চলবেন",
      donts: [
        "পুরনো বা অস্পষ্ট ফটো এড়িয়ে চলুন",
        "তথ্য অতিরঞ্জিত করবেন না",
        "অপ্রয়োজনীয় তথ্য এড়িয়ে চলুন",
        "বায়োডাটা খুব দীর্ঘ করবেন না",
      ],
    },
    faq: {
      title: "বাংলা বায়োডাটা মেকার সম্পর্কে সাধারণ প্রশ্ন",
      items: [
        {
          question: "বাংলা বিবাহ বায়োডাটা কী?",
          answer: "বাংলা বিবাহ বায়োডাটা হলো একটি নথি যাতে ব্যক্তিগত তথ্য, পারিবারিক পটভূমি, শিক্ষা এবং পেশা সম্পর্কিত প্রয়োজনীয় বিবরণ থাকে।",
        },
        {
          question: "বাংলা বায়োডাটা অনলাইনে কীভাবে তৈরি করবেন?",
          answer: "আমাদের বাংলা বায়োডাটা মেকার ব্যবহার করুন, ফরম্যাট নির্বাচন করুন, তথ্য পূরণ করুন এবং PDF বা Word এ ডাউনলোড করুন।",
        },
      ],
    },
    testimonials: {
      title: "ব্যবহারকারীরা কী বলেন",
      subtitle: "আমাদের বাংলা বায়োডাটা মেকার ব্যবহারের পর লোকজন কী বলেন",
    },
    finalCta: {
      title: "আপনার বাংলা বিবাহ বায়োডাটা তৈরি করতে প্রস্তুত?",
      description: "আজই সহজ ফরম্যাট ব্যবহার করে আপনার বাংলা বিবাহ বায়োডাটা তৈরি করুন।",
      buttonText: "বায়োডাটা তৈরি করুন",
    },
    metadata: {
      title: "Bengali Biodata Maker | বাংলা বায়োডাটা | Create Bengali Marriage Biodata Online Free",
      description: "Create Bengali marriage biodata online free. Download in PDF, Word or Image format.",
      keywords: "bengali biodata, bengali biodata maker, bengali marriage biodata, বাংলা বায়োডাটা",
    },
  },

  "tamil-biodata": {
    slug: "tamil-biodata",
    language: "Tamil",
    nativeLanguage: "தமிழ்",
    heroTitle: "Tamil Biodata Maker | திருமணத்திற்கான தமிழ் பயோடேட்டா",
    heroDescription:
      "தமிழ் பயோடேட்டா மேக்கர் பயன்படுத்தி சில நிமிடங்களில் திருமணத்திற்கான தமிழ் பயோடேட்டா உருவாக்குங்கள். தமிழ் பயோடேட்டா வடிவமைப்பை தேர்ந்தெடுங்கள், உங்கள் விவரங்களை நிரப்புங்கள் மற்றும் PDF, Word அல்லது Image இல் பதிவிறக்குங்கள்.",
    ctaText: "Create Tamil Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "பிரபலமான தமிழ் பயோடேட்டா டெம்ப்ளேட்கள்",
      subtitle: "திருமணத்திற்கு அழகான மற்றும் பாரம்பரிய தமிழ் பயோடேட்டா வடிவமைப்பு தேர்ந்தெடுங்கள்",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "தமிழ் பயோடேட்டா மேக்கர் என்ன செய்கிறது?",
      paragraphs: [
        "தமிழ் பயோடேட்டா மேக்கர் குறிப்பாக தமிழ் குடும்பங்களுக்கு திருமணத்திற்கான பயோடேட்டா உருவாக்க வடிவமைக்கப்பட்டுள்ளது.",
        "பயனர்கள் எளிதாக தனிப்பட்ட, கல்வி, தொழில்முறை மற்றும் குடும்ப விவரங்களை நிரப்பி PDF, Word அல்லது Image வடிவத்தில் பதிவிறக்கம் செய்யலாம்.",
      ],
    },
    targetAudience: {
      title: "இந்த தமிழ் பயோடேட்டா மேக்கர் யாருக்கு?",
      intro: "இந்த தமிழ் பயோடேட்டா மேக்கர் இவர்களுக்கு ஏற்றது:",
      items: [
        "திருமணத்திற்கு சொந்த தமிழ் பயோடேட்டா உருவாக்குபவர்கள்",
        "மகன் அல்லது மகளுக்கு பயோடேட்டா உருவாக்கும் பெற்றோர்",
        "தயாரான பயோடேட்டா வடிவமைப்புகளைத் தேடும் தொழில்முறையினர்",
        "திருமண விவாதங்களுக்கு பயோடேட்டா பகிரும் குடும்பங்கள்",
      ],
      outro: "வடிவமைப்புகள் படிக்க எளிதானவை மற்றும் புரிந்துகொள்ள எளிதானவை.",
    },
    communityTemplates: {
      title: "தமிழ் திருமண பயோடேட்டா டெம்ப்ளேட்கள்",
      description: "தமிழ் சமூகத்திற்கு சிறப்பு திருமண பயோடேட்டா டெம்ப்ளேட்களை வழங்குகிறோம்.",
    },
    biodataFormat: {
      title: "தமிழ் பயோடேட்டா வடிவமைப்பை புரிந்துகொள்ளுங்கள்",
      description: "நல்ல பயோடேட்டா வடிவமைப்பு மற்றவர்களுக்கு உங்கள் விவரங்களை எளிதாக புரிந்துகொள்ள உதவுகிறது.",
      sections: [
        {
          title: "தமிழ் பயோடேட்டாவில் என்ன சேர்க்க வேண்டும்",
          text: "தனிப்பட்ட விவரங்கள், கல்வி, வேலை, குடும்ப பின்னணி, பொழுதுபோக்குகள் மற்றும் தொடர்பு விவரங்கள்.",
        },
        {
          title: "Word அல்லது PDF - எதைத் தேர்வு செய்வது?",
          text: "Word வடிவமைப்பு திருத்துவதற்கு பயனுள்ளது. PDF வடிவமைப்பு பகிர்வதற்கும் அச்சிடுவதற்கும் சிறந்தது.",
        },
        {
          title: "எளிமையான மற்றும் சுத்தமான பயோடேட்டா தளவமைப்பு",
          text: "ஒவ்வொரு டெம்ப்ளேட்டும் எளிமையாகவும் நேர்த்தியாகவும் வைக்கப்பட்டுள்ளது.",
        },
      ],
    },
    whyChooseUs: {
      title: "எங்கள் தமிழ் பயோடேட்டா மேக்கரில் என்ன கிடைக்கும்",
      description: "சுத்தமான மற்றும் படிக்க எளிதான தமிழ் திருமண பயோடேட்டா உருவாக்க எல்லாம்.",
      features: [
        "பயன்படுத்த எளிது: விவரங்களை நிரப்புங்கள், பயோடேட்டா தயார்",
        "25+ டெம்ப்ளேட்கள்: பல்வேறு சமூகங்களுக்கு",
        "PDF பதிவிறக்கம்: PDF ஆக பதிவிறக்குங்கள்",
        "Word பதிவிறக்கம்: திருத்துவதற்கு Word வடிவமைப்பு",
        "புகைப்பட பதிவேற்றம்: பயோடேட்டாவில் புகைப்படம் சேர்க்கவும்",
        "தமிழ் மொழி: முழு தமிழ் மொழியில் கிடைக்கும்",
        "உடனடி பதிவிறக்கம்: உடனடியாக பதிவிறக்குங்கள்",
        "தனிப்பட்ட & பாதுகாப்பான: உங்கள் விவரங்கள் யாருடனும் பகிரப்படாது",
      ],
    },
    tips: {
      title: "நல்ல தமிழ் திருமண பயோடேட்டா உருவாக்க குறிப்புகள்",
      description: "இந்த எளிய குறிப்புகள் தெளிவான பயோடேட்டா உருவாக்க உதவும்.",
      dosTitle: "என்ன செய்ய வேண்டும்",
      dos: [
        "சமீபத்திய மற்றும் தெளிவான புகைப்படம் பயன்படுத்துங்கள்",
        "சரியான மற்றும் நேர்மையான விவரங்களைக் கொடுங்கள்",
        "குடும்ப பின்னணி தகவலைச் சேர்க்கவும்",
        "பயோடேட்டாவை சுருக்கமாகவும் நேர்த்தியாகவும் வையுங்கள்",
      ],
      dontsTitle: "என்ன தவிர்க்க வேண்டும்",
      donts: [
        "பழைய அல்லது தெளிவற்ற புகைப்படங்களைத் தவிர்க்கவும்",
        "விவரங்களை மிகைப்படுத்த வேண்டாம்",
        "தேவையற்ற தகவல்களைத் தவிர்க்கவும்",
        "பயோடேட்டாவை மிகவும் நீளமாக்க வேண்டாம்",
      ],
    },
    faq: {
      title: "தமிழ் பயோடேட்டா மேக்கர் பற்றிய பொதுவான கேள்விகள்",
      items: [
        {
          question: "தமிழ் திருமண பயோடேட்டா என்றால் என்ன?",
          answer: "தமிழ் திருமண பயோடேட்டா என்பது தனிப்பட்ட தகவல், குடும்ப பின்னணி, கல்வி மற்றும் தொழில் போன்ற அத்தியாவசிய விவரங்களைக் கொண்ட ஆவணம்.",
        },
        {
          question: "தமிழ் பயோடேட்டாவை ஆன்லைனில் எப்படி உருவாக்குவது?",
          answer: "எங்கள் தமிழ் பயோடேட்டா மேக்கரைப் பயன்படுத்துங்கள், வடிவமைப்பைத் தேர்ந்தெடுங்கள், விவரங்களை நிரப்புங்கள் மற்றும் PDF அல்லது Word இல் பதிவிறக்குங்கள்.",
        },
      ],
    },
    testimonials: {
      title: "பயனர்கள் என்ன சொல்கிறார்கள்",
      subtitle: "எங்கள் தமிழ் பயோடேட்டா மேக்கரைப் பயன்படுத்திய பிறகு மக்கள் என்ன சொல்கிறார்கள்",
    },
    finalCta: {
      title: "உங்கள் தமிழ் திருமண பயோடேட்டா உருவாக்க தயாரா?",
      description: "இன்றே எளிய வடிவமைப்பைப் பயன்படுத்தி உங்கள் தமிழ் திருமண பயோடேட்டாவை உருவாக்குங்கள்.",
      buttonText: "பயோடேட்டா உருவாக்குங்கள்",
    },
    metadata: {
      title: "Tamil Biodata Maker | தமிழ் பயோடேட்டா | Create Tamil Marriage Biodata Online Free",
      description: "Create Tamil marriage biodata online free. Download in PDF, Word or Image format.",
      keywords: "tamil biodata, tamil biodata maker, tamil marriage biodata, தமிழ் பயோடேட்டா",
    },
  },

  "telugu-biodata": {
    slug: "telugu-biodata",
    language: "Telugu",
    nativeLanguage: "తెలుగు",
    heroTitle: "Telugu Biodata Maker | వివాహానికి తెలుగు బయోడేటా",
    heroDescription:
      "తెలుగు బయోడేటా మేకర్ ఉపయోగించి కొన్ని నిమిషాల్లో వివాహానికి తెలుగు బయోడేటా తయారు చేయండి. తెలుగు బయోడేటా ఫార్మాట్ ఎంచుకోండి, మీ వివరాలు నింపండి మరియు PDF, Word లేదా Image లో డౌన్‌లోడ్ చేయండి.",
    ctaText: "Create Telugu Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "ప్రముఖ తెలుగు బయోడేటా టెంప్లేట్‌లు",
      subtitle: "వివాహానికి అందమైన మరియు సాంప్రదాయ తెలుగు బయోడేటా ఫార్మాట్ ఎంచుకోండి",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "తెలుగు బయోడేటా మేకర్ ఏమి చేస్తుంది?",
      paragraphs: [
        "తెలుగు బయోడేటా మేకర్ ప్రత్యేకంగా తెలుగు కుటుంబాలకు వివాహానికి బయోడేటా తయారు చేయడానికి రూపొందించబడింది.",
        "వినియోగదారులు సులభంగా వ్యక్తిగత, విద్యా, వృత్తిపరమైన మరియు కుటుంబ వివరాలను నింపి PDF, Word లేదా Image ఫార్మాట్‌లో డౌన్‌లోడ్ చేయవచ్చు.",
      ],
    },
    targetAudience: {
      title: "ఈ తెలుగు బయోడేటా మేకర్ ఎవరికి?",
      intro: "ఈ తెలుగు బయోడేటా మేకర్ ఇలాంటి వారికి అనుకూలం:",
      items: [
        "వివాహానికి సొంత తెలుగు బయోడేటా తయారు చేసుకునేవారు",
        "కొడుకు లేదా కూతురు కోసం బయోడేటా తయారు చేసే తల్లిదండ్రులు",
        "సిద్ధంగా ఉన్న బయోడేటా ఫార్మాట్‌లు కోరుకునే వృత్తినిపుణులు",
        "వివాహ చర్చల కోసం బయోడేటా షేర్ చేసే కుటుంబాలు",
      ],
      outro: "ఫార్మాట్‌లు చదవడానికి సులభం మరియు అర్థం చేసుకోవడానికి సులభం.",
    },
    communityTemplates: {
      title: "తెలుగు వివాహ బయోడేటా టెంప్లేట్‌లు",
      description: "తెలుగు సమాజానికి ప్రత్యేక వివాహ బయోడేటా టెంప్లేట్‌లను అందిస్తాము.",
    },
    biodataFormat: {
      title: "తెలుగు బయోడేటా ఫార్మాట్ అర్థం చేసుకోండి",
      description: "మంచి బయోడేటా ఫార్మాట్ ఇతరులకు మీ వివరాలను సులభంగా అర్థం చేసుకోవడానికి సహాయపడుతుంది.",
      sections: [
        {
          title: "తెలుగు బయోడేటాలో ఏమి చేర్చాలి",
          text: "వ్యక్తిగత వివరాలు, విద్య, ఉద్యోగం, కుటుంబ నేపథ్యం, అభిరుచులు మరియు సంప్రదింపు వివరాలు.",
        },
        {
          title: "Word లేదా PDF - ఏది ఎంచుకోవాలి?",
          text: "Word ఫార్మాట్ ఎడిటింగ్‌కు ఉపయోగకరం. PDF ఫార్మాట్ షేర్ చేయడానికి మరియు ప్రింట్ చేయడానికి మంచిది.",
        },
        {
          title: "సరళమైన మరియు శుభ్రమైన బయోడేటా లేఅవుట్",
          text: "ప్రతి టెంప్లేట్ సరళంగా మరియు శుభ్రంగా ఉంచబడింది.",
        },
      ],
    },
    whyChooseUs: {
      title: "మా తెలుగు బయోడేటా మేకర్‌తో ఏమి లభిస్తుంది",
      description: "శుభ్రమైన మరియు చదవడానికి సులభమైన తెలుగు వివాహ బయోడేటా తయారు చేయడానికి అన్నీ.",
      features: [
        "ఉపయోగించడానికి సులభం: వివరాలు నింపండి, బయోడేటా సిద్ధం",
        "25+ టెంప్లేట్‌లు: వివిధ సమాజాలకు",
        "PDF డౌన్‌లోడ్: PDF గా డౌన్‌లోడ్ చేయండి",
        "Word డౌన్‌లోడ్: ఎడిటింగ్ కోసం Word ఫార్మాట్",
        "ఫోటో అప్‌లోడ్: బయోడేటాలో ఫోటో జోడించండి",
        "తెలుగు భాష: పూర్తి తెలుగు భాషలో అందుబాటులో",
        "తక్షణ డౌన్‌లోడ్: వెంటనే డౌన్‌లోడ్ చేయండి",
        "ప్రైవేట్ & సేఫ్: మీ వివరాలు ఎవరితోనూ షేర్ చేయబడవు",
      ],
    },
    tips: {
      title: "మంచి తెలుగు వివాహ బయోడేటా తయారు చేయడానికి చిట్కాలు",
      description: "ఈ సులభమైన చిట్కాలు స్పష్టమైన బయోడేటా తయారు చేయడంలో సహాయపడగలవు.",
      dosTitle: "ఏమి చేయాలి",
      dos: [
        "ఇటీవలి మరియు స్పష్టమైన ఫోటో ఉపయోగించండి",
        "సరైన మరియు నిజాయితీగల వివరాలు ఇవ్వండి",
        "కుటుంబ నేపథ్య సమాచారం జోడించండి",
        "బయోడేటాను చిన్నగా మరియు శుభ్రంగా ఉంచండి",
      ],
      dontsTitle: "ఏమి నివారించాలి",
      donts: [
        "పాత లేదా అస్పష్టమైన ఫోటోలు నివారించండి",
        "వివరాలను అతిశయోక్తి చేయకండి",
        "అనవసరమైన సమాచారం నివారించండి",
        "బయోడేటాను చాలా పొడవుగా చేయకండి",
      ],
    },
    faq: {
      title: "తెలుగు బయోడేటా మేకర్ గురించి సాధారణ ప్రశ్నలు",
      items: [
        {
          question: "తెలుగు వివాహ బయోడేటా అంటే ఏమిటి?",
          answer: "తెలుగు వివాహ బయోడేటా అనేది వ్యక్తిగత సమాచారం, కుటుంబ నేపథ్యం, విద్య మరియు వృత్తి వంటి అవసరమైన వివరాలు ఉన్న పత్రం.",
        },
        {
          question: "తెలుగు బయోడేటాను ఆన్‌లైన్‌లో ఎలా తయారు చేయాలి?",
          answer: "మా తెలుగు బయోడేటా మేకర్ ఉపయోగించండి, ఫార్మాట్ ఎంచుకోండి, వివరాలు నింపండి మరియు PDF లేదా Word లో డౌన్‌లోడ్ చేయండి.",
        },
      ],
    },
    testimonials: {
      title: "వినియోగదారులు ఏమి చెబుతారు",
      subtitle: "మా తెలుగు బయోడేటా మేకర్ ఉపయోగించిన తర్వాత ప్రజలు ఏమి చెబుతారు",
    },
    finalCta: {
      title: "మీ తెలుగు వివాహ బయోడేటా తయారు చేయడానికి సిద్ధంగా ఉన్నారా?",
      description: "ఈ రోజే సరళమైన ఫార్మాట్ ఉపయోగించి మీ తెలుగు వివాహ బయోడేటా తయారు చేయండి.",
      buttonText: "బయోడేటా తయారు చేయండి",
    },
    metadata: {
      title: "Telugu Biodata Maker | తెలుగు బయోడేటా | Create Telugu Marriage Biodata Online Free",
      description: "Create Telugu marriage biodata online free. Download in PDF, Word or Image format.",
      keywords: "telugu biodata, telugu biodata maker, telugu marriage biodata, తెలుగు బయోడేటా",
    },
  },

  "muslim-biodata": {
    slug: "muslim-biodata",
    language: "Muslim",
    nativeLanguage: "Muslim",
    heroTitle: "Muslim Biodata Maker | Create Muslim Marriage Biodata Online",
    heroDescription:
      "Create a professional Muslim marriage biodata online using our free biodata maker. Choose from beautiful Islamic biodata templates, fill in your details, and download your biodata in PDF, Word, or Image format. No registration needed.",
    ctaText: "Create Muslim Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "Popular Muslim Biodata Templates",
      subtitle: "Beautiful and respectful Muslim biodata formats for Nikah proposals",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "What Does the Muslim Biodata Maker Do?",
      paragraphs: [
        "The Muslim Biodata Maker is specifically designed to help Muslim families create marriage biodata that respects Islamic traditions and values. Templates include sections for Maslak, Jamaat, and other important details.",
        "Users can easily fill in personal, educational, professional, and family details, preview the biodata, and download it in PDF, Word, or Image format.",
      ],
    },
    targetAudience: {
      title: "Who Is This Muslim Biodata Maker For?",
      intro: "This Muslim biodata maker is ideal for:",
      items: [
        "Individuals preparing their own Muslim marriage biodata",
        "Parents creating biodata for their son or daughter for Nikah",
        "Families looking for ready-to-use Islamic biodata formats",
        "Communities sharing biodata for marriage discussions and proposals",
      ],
      outro: "The formats respect Islamic traditions and are designed to meet expectations in Muslim marriage discussions.",
    },
    communityTemplates: {
      title: "Muslim Marriage Biodata Templates",
      description: "We provide specialized Muslim marriage biodata templates that include sections relevant to the Muslim community including Maslak, Jamaat, and family background.",
    },
    biodataFormat: {
      title: "Understanding Muslim Biodata Format",
      description: "A well-structured Muslim biodata helps families understand your background and values.",
      sections: [
        {
          title: "What to Include in a Muslim Biodata",
          text: "Personal details, education, occupation, family background, Maslak, Jamaat, religious practices, and contact information.",
        },
        {
          title: "Word or PDF - Which to Choose?",
          text: "Word format is useful for editing. PDF format is better for sharing and printing.",
        },
        {
          title: "Respectful and Clean Biodata Layout",
          text: "Each template is designed with respect for Islamic values while maintaining a clean, professional look.",
        },
      ],
    },
    whyChooseUs: {
      title: "What You Get with Our Muslim Biodata Maker",
      description: "Everything you need to create a respectful and professional Muslim marriage biodata.",
      features: [
        "Easy to Use: Fill in your details and your biodata is ready",
        "Islamic Templates: Designed for Muslim families",
        "PDF Download: Download your biodata as PDF",
        "Word Download: Get your biodata in Word format for editing",
        "Photo Upload: Add your photo to the biodata",
        "Community Specific: Includes Maslak, Jamaat fields",
        "Instant Download: Download immediately",
        "Private & Safe: Your details are not shared with anyone",
      ],
    },
    tips: {
      title: "Tips for Creating a Good Muslim Marriage Biodata",
      description: "These tips can help you create a respectful and clear biodata for Nikah proposals.",
      dosTitle: "What You Should Do",
      dos: [
        "Use a recent and decent photo",
        "Share correct and honest details",
        "Include family and religious background",
        "Keep the biodata concise and respectful",
      ],
      dontsTitle: "What You Should Avoid",
      donts: [
        "Avoid inappropriate photos",
        "Don't exaggerate your details",
        "Avoid unnecessary personal information",
        "Don't make the biodata too long",
      ],
    },
    faq: {
      title: "Common Questions About Muslim Biodata Maker",
      items: [
        {
          question: "What is a Muslim marriage biodata?",
          answer: "A Muslim marriage biodata is a document containing personal information, family background, education, profession, and religious details used during Nikah proposals.",
        },
        {
          question: "How to create a Muslim biodata online?",
          answer: "Use our Muslim Biodata Maker, choose an Islamic template, fill in your details, preview, and download in PDF or Word format.",
        },
      ],
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Here's what Muslim families say after using our Biodata Maker",
    },
    finalCta: {
      title: "Ready to Create Your Muslim Marriage Biodata?",
      description: "Start creating your Muslim marriage biodata today using respectful, ready-to-use templates.",
      buttonText: "Start Creating Biodata",
    },
    metadata: {
      title: "Muslim Biodata Maker | Create Muslim Marriage Biodata Online Free",
      description: "Create Muslim marriage biodata online free. Islamic templates with PDF, Word and Image download.",
      keywords: "muslim biodata, muslim biodata maker, muslim marriage biodata, islamic biodata, nikah biodata",
    },
  },

  "hindu-biodata": {
    slug: "hindu-biodata",
    language: "Hindu",
    nativeLanguage: "Hindu",
    heroTitle: "Hindu Biodata Maker | Create Hindu Marriage Biodata Online",
    heroDescription:
      "Create a beautiful Hindu marriage biodata online using our free biodata maker. Choose from traditional Hindu biodata templates, fill in your details including Gotra, Rashi, and Nakshatra, and download your biodata in PDF, Word, or Image format.",
    ctaText: "Create Hindu Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "Popular Hindu Biodata Templates",
      subtitle: "Beautiful and traditional Hindu biodata formats for marriage",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "What Does the Hindu Biodata Maker Do?",
      paragraphs: [
        "The Hindu Biodata Maker is specifically designed for Hindu families to create marriage biodata that follows traditional Hindu customs. Templates include sections for Gotra, Rashi, Nakshatra, Manglik status, and other important details.",
        "Users can easily fill in personal, educational, professional, and family details, preview the biodata, and download it in PDF, Word, or Image format.",
      ],
    },
    targetAudience: {
      title: "Who Is This Hindu Biodata Maker For?",
      intro: "This Hindu biodata maker is ideal for:",
      items: [
        "Individuals preparing their own Hindu marriage biodata",
        "Parents creating biodata for their son or daughter",
        "Families looking for traditional Hindu biodata formats with Kundli details",
        "Communities sharing biodata for marriage discussions and proposals",
      ],
      outro: "The formats follow Hindu traditions and are designed to meet expectations in Hindu marriage discussions.",
    },
    communityTemplates: {
      title: "Hindu Marriage Biodata Templates",
      description: "We provide specialized Hindu marriage biodata templates with sections for Gotra, Rashi, Nakshatra, Manglik status, and family background.",
    },
    biodataFormat: {
      title: "Understanding Hindu Biodata Format",
      description: "A well-structured Hindu biodata helps families understand your background and Kundli details.",
      sections: [
        {
          title: "What to Include in a Hindu Biodata",
          text: "Personal details, Gotra, Rashi, Nakshatra, Manglik status, education, occupation, family background, and contact information.",
        },
        {
          title: "Word or PDF - Which to Choose?",
          text: "Word format is useful for editing. PDF format is better for sharing and printing.",
        },
        {
          title: "Traditional and Clean Biodata Layout",
          text: "Each template is designed following Hindu traditions while maintaining a clean, professional look.",
        },
      ],
    },
    whyChooseUs: {
      title: "What You Get with Our Hindu Biodata Maker",
      description: "Everything you need to create a traditional and professional Hindu marriage biodata.",
      features: [
        "Easy to Use: Fill in your details and your biodata is ready",
        "Traditional Templates: Designed for Hindu families",
        "PDF Download: Download your biodata as PDF",
        "Word Download: Get your biodata in Word format for editing",
        "Photo Upload: Add your photo to the biodata",
        "Kundli Details: Includes Gotra, Rashi, Nakshatra fields",
        "Instant Download: Download immediately",
        "Private & Safe: Your details are not shared with anyone",
      ],
    },
    tips: {
      title: "Tips for Creating a Good Hindu Marriage Biodata",
      description: "These tips can help you create a clear and traditional biodata for marriage proposals.",
      dosTitle: "What You Should Do",
      dos: [
        "Use a recent and clear photo",
        "Include accurate Kundli details",
        "Add family background information",
        "Keep the biodata neat and well-structured",
      ],
      dontsTitle: "What You Should Avoid",
      donts: [
        "Avoid old or unclear photos",
        "Don't provide incorrect Gotra or Rashi details",
        "Avoid unnecessary information",
        "Don't make the biodata too long",
      ],
    },
    faq: {
      title: "Common Questions About Hindu Biodata Maker",
      items: [
        {
          question: "What is a Hindu marriage biodata?",
          answer: "A Hindu marriage biodata is a document containing personal information, Kundli details (Gotra, Rashi, Nakshatra), family background, education, and profession used during marriage proposals.",
        },
        {
          question: "How to create a Hindu biodata online?",
          answer: "Use our Hindu Biodata Maker, choose a traditional template, fill in your details including Kundli information, preview, and download in PDF or Word format.",
        },
      ],
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Here's what Hindu families say after using our Biodata Maker",
    },
    finalCta: {
      title: "Ready to Create Your Hindu Marriage Biodata?",
      description: "Start creating your Hindu marriage biodata today using traditional, ready-to-use templates.",
      buttonText: "Start Creating Biodata",
    },
    metadata: {
      title: "Hindu Biodata Maker | Create Hindu Marriage Biodata Online Free",
      description: "Create Hindu marriage biodata online free. Traditional templates with Gotra, Rashi, Nakshatra details.",
      keywords: "hindu biodata, hindu biodata maker, hindu marriage biodata, hindu biodata format",
    },
  },

  "buddhist-biodata": {
    slug: "buddhist-biodata",
    language: "Buddhist",
    nativeLanguage: "Buddhist",
    heroTitle: "Buddhist Biodata Maker | Create Buddhist Marriage Biodata Online",
    heroDescription:
      "Create a respectful Buddhist marriage biodata online using our free biodata maker. Choose from clean and simple biodata templates, fill in your details, and download your biodata in PDF, Word, or Image format. No registration needed.",
    ctaText: "Create Buddhist Biodata",
    viewTemplatesText: "View Templates",
    featureBar: {
      noRegistration: "No Registration Required",
      noRegistrationSub: "Instant Biodata Creation",
      templates: "More Templates",
      templatesSub: "More than 45+ Templates",
      download: "Download Options",
      downloadSub: "PDF, Word & Image",
    },
    templateSection: {
      title: "Popular Buddhist Biodata Templates",
      subtitle: "Clean and respectful Buddhist biodata formats for marriage",
      viewAll: "View All Templates →",
    },
    whatItDoes: {
      title: "What Does the Buddhist Biodata Maker Do?",
      paragraphs: [
        "The Buddhist Biodata Maker is designed for Buddhist families to create marriage biodata that reflects Buddhist values and simplicity.",
        "Users can easily fill in personal, educational, professional, and family details, preview the biodata, and download it in PDF, Word, or Image format.",
      ],
    },
    targetAudience: {
      title: "Who Is This Buddhist Biodata Maker For?",
      intro: "This Buddhist biodata maker is ideal for:",
      items: [
        "Individuals preparing their own Buddhist marriage biodata",
        "Parents creating biodata for their son or daughter",
        "Families looking for clean and simple biodata formats",
        "Communities sharing biodata for marriage discussions and proposals",
      ],
      outro: "The formats are designed with Buddhist values of simplicity and clarity.",
    },
    communityTemplates: {
      title: "Buddhist Marriage Biodata Templates",
      description: "We provide clean and respectful Buddhist marriage biodata templates suitable for the Buddhist community.",
    },
    biodataFormat: {
      title: "Understanding Buddhist Biodata Format",
      description: "A well-structured biodata helps families understand your background clearly.",
      sections: [
        {
          title: "What to Include in a Buddhist Biodata",
          text: "Personal details, education, occupation, family background, and contact information.",
        },
        {
          title: "Word or PDF - Which to Choose?",
          text: "Word format is useful for editing. PDF format is better for sharing and printing.",
        },
        {
          title: "Simple and Clean Biodata Layout",
          text: "Each template reflects Buddhist simplicity while maintaining a professional look.",
        },
      ],
    },
    whyChooseUs: {
      title: "What You Get with Our Buddhist Biodata Maker",
      description: "Everything you need to create a clean and respectful Buddhist marriage biodata.",
      features: [
        "Easy to Use: Fill in your details and your biodata is ready",
        "Clean Templates: Simple and respectful designs",
        "PDF Download: Download your biodata as PDF",
        "Word Download: Get your biodata in Word format for editing",
        "Photo Upload: Add your photo to the biodata",
        "Community Friendly: Designed for Buddhist families",
        "Instant Download: Download immediately",
        "Private & Safe: Your details are not shared with anyone",
      ],
    },
    tips: {
      title: "Tips for Creating a Good Buddhist Marriage Biodata",
      description: "These tips can help you create a clear and respectful biodata.",
      dosTitle: "What You Should Do",
      dos: [
        "Use a recent and clear photo",
        "Share correct and honest details",
        "Add family background information",
        "Keep the biodata simple and neat",
      ],
      dontsTitle: "What You Should Avoid",
      donts: [
        "Avoid old or unclear photos",
        "Don't exaggerate your details",
        "Avoid unnecessary information",
        "Don't make the biodata too long",
      ],
    },
    faq: {
      title: "Common Questions About Buddhist Biodata Maker",
      items: [
        {
          question: "What is a Buddhist marriage biodata?",
          answer: "A Buddhist marriage biodata is a document containing personal information, family background, education, and profession details used during marriage proposals in the Buddhist community.",
        },
        {
          question: "How to create a Buddhist biodata online?",
          answer: "Use our Buddhist Biodata Maker, choose a template, fill in your details, preview, and download in PDF or Word format.",
        },
      ],
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Here's what Buddhist families say after using our Biodata Maker",
    },
    finalCta: {
      title: "Ready to Create Your Buddhist Marriage Biodata?",
      description: "Start creating your Buddhist marriage biodata today using clean, ready-to-use templates.",
      buttonText: "Start Creating Biodata",
    },
    metadata: {
      title: "Buddhist Biodata Maker | Create Buddhist Marriage Biodata Online Free",
      description: "Create Buddhist marriage biodata online free. Clean templates with PDF, Word and Image download.",
      keywords: "buddhist biodata, buddhist biodata maker, buddhist marriage biodata, buddhist biodata format",
    },
  },
};
