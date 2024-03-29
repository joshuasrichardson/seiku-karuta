import { Language, ScriptureData, StandardWork } from "./types";

const s3BucketUrl = "https://seiku-karuta.s3.us-west-1.amazonaws.com";

export const introScriptures = (language: Language): string[] =>
  [
    "/Alma_37_34.m4a",
    "/Alma_37_36.m4a",
    "/John_3_16.m4a",
    "/1_Nephi_1_5.m4a",
    "/Alma_36_19.m4a",
    // "/1_Nephi_17_36.m4a",
    // "/1_Nephi_18_3.m4a",
    // "/2_Nephi_9_6.m4a",
    // "/Mosiah_4_9.m4a",
    // "/Romans_8_16.m4a",
  ].map((scripture) => `${s3BucketUrl}/${language}/intro${scripture}`);

export const masteryScriptures = (
  language: Language
): { [key: string]: string[] } => ({
  [StandardWork.OLD_TESTAMENT]: [
    "/1_Samuel_16_7.m4a",
    "/Abraham_3_22-23.m4a",
    "/Amos_3_7.m4a",
    "/Exodus_19_5-6.m4a",
    "/Exodus_20_3-17.m4a",
    "/Ezekiel_37_15-17.m4a",
    "/Genesis_1_26-27.m4a",
    "/Genesis_2_24.m4a",
    "/Genesis_39_9.m4a",
    "/Isaiah_1_18.m4a",
    "/Isaiah_5_20.m4a",
    "/Isaiah_29_13-14.m4a",
    "/Isaiah_53_3-5.m4a",
    "/Isaiah_58_6-7.m4a",
    "/Isaiah_58_13-14.m4a",
    "/Jeremiah_1_4-5.m4a",
    "/Joshua_24_15.m4a",
    "/Malachi_3_8-10.m4a",
    "/Malachi_4_5-6.m4a",
    "/Moses_1_39.m4a",
    "/Moses_7_18.m4a",
    "/Proverbs_3_5-6.m4a",
    "/Psalm_24_3-4.m4a",
    "/Psalm_119_105.m4a",
    "/Psalm_127_3.m4a",
  ].map((scripture) => `${s3BucketUrl}/${language}/oldtestament${scripture}`),
  [StandardWork.NEW_TESTAMENT]: [
    "/Matthew_5_14-16.m4a",
    "/Matthew_11_28-30.m4a",
    "/Matthew_16_15-19.m4a",
    "/Matthew_22_36-39.m4a",
    "/Matthew_28_19-20.m4a",
    "/1_Peter_4_6.m4a",
    "/James_2_17-18.m4a",
    "/Revelation_20_12.m4a",
    "/1_Corinthians_15_20-22.m4a",
    "/1_Corinthians_15_40-42.m4a",
    "/2_Thessalonians_2_1-3.m4a",
    "/2_Timothy_3_15-17.m4a",
    "/Ephesians_4_11-14.m4a",
    "/Galatians_5_22-23.m4a",
    "/Hebrews_12_9.m4a",
    "/James_1_5-6.m4a",
    "/Philippians_4_13.m4a",
    "/1_Corinthians_6_19-20.m4a",
    "/Acts_2_36-38.m4a",
    "/Acts_3_19-21.m4a",
    "/John_3_5.m4a",
    "/John_14_6.m4a",
    "/John_14_15.m4a",
    "/John_17_3.m4a",
    "/Luke_24_36-39.m4a",
  ].map((scripture) => `${s3BucketUrl}/${language}/newtestament${scripture}`),
  [StandardWork.BOOK_OF_MORMON]: [
    "/3_Nephi_18_15and20-21.m4a",
    "/Alma_7_11-13.m4a",
    "/Alma_32_21.m4a",
    "/Alma_37_35.m4a",
    "/Alma_39_9.m4a",
    "/Alma_41_10.m4a",
    "/Ether_12_6.m4a",
    "/Ether_12_27.m4a",
    "/Helaman_5_12.m4a",
    "/Moroni_7_41.m4a",
    "/Moroni_7_45and47-48.m4a",
    "/Moroni_10_4-5.m4a",
    "/Mosiah_2_17.m4a",
    "/Mosiah_3_19.m4a",
    "/Mosiah_4_30.m4a",
    "/1_Nephi_3_7.m4a",
    "/2_Nephi_2_25.m4a",
    "/2_Nephi_2_27.m4a",
    "/2_Nephi_9_28-29.m4a",
    "/2_Nephi_25_23and26.m4a",
    "/2_Nephi_28_7-9.m4a",
    "/2_Nephi_31_19-20.m4a",
    "/2_Nephi_32_3.m4a",
    "/2_Nephi_32_8-9.m4a",
    "/3_Nephi_12_48.m4a",
  ].map((scripture) => `${s3BucketUrl}/${language}/bookofmormon${scripture}`),
  [StandardWork.DOCTRINE_AND_COVENANTS]: [
    "/Doctrine_and_Covenants_88_124.m4a",
    "/Doctrine_and_Covenants_89_18-21.m4a",
    "/Doctrine_and_Covenants_107_8.m4a",
    "/Doctrine_and_Covenants_121_36and41-42.m4a",
    "/Joseph_Smith_History_15-20.m4a",
    "/Doctrine_and_Covenants_130_22-23.m4a",
    "/Doctrine_and_Covenants_131_1-4.m4a",
    "/Doctrine_and_Covenants_1_37-38.m4a",
    "/Doctrine_and_Covenants_6_36.m4a",
    "/Doctrine_and_Covenants_8_2-3.m4a",
    "/Doctrine_and_Covenants_10_5.m4a",
    "/Doctrine_and_Covenants_13_1.m4a",
    "/Doctrine_and_Covenants_18_10-11.m4a",
    "/Doctrine_and_Covenants_18_15-16.m4a",
    "/Doctrine_and_Covenants_19_16-19.m4a",
    "/Doctrine_and_Covenants_19_23.m4a",
    "/Doctrine_and_Covenants_25_13.m4a",
    "/Doctrine_and_Covenants_46_33.m4a",
    "/Doctrine_and_Covenants_58_27.m4a",
    "/Doctrine_and_Covenants_58_42-43.m4a",
    "/Doctrine_and_Covenants_64_9-11.m4a",
    "/Doctrine_and_Covenants_76_22-24.m4a",
    "/Doctrine_and_Covenants_76_40-41.m4a",
    "/Doctrine_and_Covenants_78_19.m4a",
    "/Doctrine_and_Covenants_82_10.m4a",
  ].map(
    (scripture) => `${s3BucketUrl}/${language}/doctrineandcovenants${scripture}`
  ),
});

export const scripturePassages = {
  [StandardWork.OLD_TESTAMENT]: {
    "Moses 1:39": {
      fullScripture:
        "For behold, this is my work and my glory—to bring to pass the immortality and eternal life of man.",
      torifuda: "to bring to pass the immortality and eternal life of man.",
    },
    "Moses 7:18": {
      fullScripture:
        "And the Lord called his people Zion, because they were of one heart and one mind, and dwelt in righteousness; and there was no poor among them.",
      torifuda: "and there was no poor among them.",
    },
    "Abraham 3:22-23": {
      fullScripture:
        "Now the Lord had shown unto me, Abraham, the intelligences that were organized before the world was; and among all these there were many of the noble and great ones; And God saw these souls that they were good, and he stood in the midst of them, and he said: These I will make my rulers; for he stood among those that were spirits, and he saw that they were good; and he said unto me: Abraham, thou art one of them; thou wast chosen before thou wast born.",
      torifuda: "thou wast chosen before thou wast born.",
    },
    "Genesis 1:26-27": {
      fullScripture:
        "And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth. So God created man in his own image, in the image of God created he him; male and female created he them.",
      torifuda:
        "in the image of God created he him; male and female created he them.",
    },
    "Genesis 2:24": {
      fullScripture:
        "Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.",
      torifuda: "and shall cleave unto his wife: and they shall be one flesh.",
    },
    "Genesis 39:9": {
      fullScripture:
        "There is none greater in this house than I; neither hath he kept back any thing from me but thee, because thou art his wife: how then can I do this great wickedness, and sin against God?",
      torifuda: "how then can I do this great wickedness, and sin against God?",
    },
    "Exodus 19:5-6": {
      fullScripture:
        "Now therefore, if ye will obey my voice indeed, and keep my covenant, then ye shall be a peculiar treasure unto me above all people: for all the earth is mine: And ye shall be unto me a kingdom of priests, and an holy nation. These are the words which thou shalt speak unto the children of Israel.",
      torifuda:
        "These are the words which thou shalt speak unto the children of Israel.",
    },
    "Exodus 20:3-17": {
      fullScripture:
        "Thou shalt have no other gods before me. Thou shalt not make unto thee any graven image, or any likeness of any thing that is in heaven above, or that is in the earth beneath, or that is in the water under the earth: Thou shalt not bow down thyself to them, nor serve them: for I the Lord thy God am a jealous God, visiting the iniquity of the fathers upon the children unto the third and fourth generation of them that hate me; And shewing mercy unto thousands of them that love me, and keep my commandments. Thou shalt not take the name of the Lord thy God in vain; for the Lord will not hold him guiltless that taketh his name in vain. Remember the sabbath day, to keep it holy. Six days shalt thou labour, and do all thy work: But the seventh day is the sabbath of the Lord thy God: in it thou shalt not do any work, thou, nor thy son, nor thy daughter, thy manservant, nor thy maidservant, nor thy cattle, nor thy stranger that is within thy gates: For in six days the Lord made heaven and earth, the sea, and all that in them is, and rested the seventh day: wherefore the Lord blessed the sabbath day, and hallowed it. Honour thy father and thy mother: that thy days may be long upon the land which the Lord thy God giveth thee. Thou shalt not kill. Thou shalt not commit adultery. Thou shalt not steal. Thou shalt not bear false witness against thy neighbour. Thou shalt not covet thy neighbour's house, thou shalt not covet thy neighbour's wife, nor his manservant, nor his maidservant, nor his ox, nor his ass, nor any thing that is thy neighbour's.",
      torifuda: "nor any thing that is thy neighbour's.",
    },
    "Joshua 24:15": {
      fullScripture:
        "And if it seem evil unto you to serve the Lord, choose you this day whom ye will serve; whether the gods which your fathers served that were on the other side of the flood, or the gods of the Amorites, in whose land ye dwell: but as for me and my house, we will serve the Lord.",
      torifuda: "but as for me and my house, we will serve the Lord.",
    },
    "1 Samuel 16:7": {
      fullScripture:
        "But the Lord said unto Samuel, Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart.",
      torifuda: "but the Lord looketh on the heart.",
    },
    "Psalm 24:3-4": {
      fullScripture:
        "Who shall ascend into the hill of the Lord? or who shall stand in his holy place? He that hath clean hands, and a pure heart; who hath not lifted up his soul unto vanity, nor sworn deceitfully.",
      torifuda:
        "who hath not lifted up his soul unto vanity, nor sworn deceitfully.",
    },
    "Psalm 119:105": {
      fullScripture:
        "Thy word is a lamp unto my feet, and a light unto my path.",
      torifuda: "and a light unto my path.",
    },
    "Psalm 127:3": {
      fullScripture:
        "Lo, children are an heritage of the Lord: and the fruit of the womb is his reward.",
      torifuda: "and the fruit of the womb is his reward.",
    },
    "Proverbs 3:5-6": {
      fullScripture:
        "Trust in the Lord with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
      torifuda:
        "In all thy ways acknowledge him, and he shall direct thy paths.",
    },
    "Isaiah 1:18": {
      fullScripture:
        "Come now, and let us reason together, saith the Lord: though your sins be as scarlet, they shall be as white as snow; though they be red like crimson, they shall be as wool.",
      torifuda: "though they be red like crimson, they shall be as wool.",
    },
    "Isaiah 5:20": {
      fullScripture:
        "Woe unto them that call evil good, and good evil; that put darkness for light, and light for darkness; that put bitter for sweet, and sweet for bitter!",
      torifuda: "that put bitter for sweet, and sweet for bitter!",
    },
    "Isaiah 29:13-14": {
      fullScripture:
        "Wherefore the Lord said, Forasmuch as this people draw near me with their mouth, and with their lips do honour me, but have removed their heart far from me, and their fear toward me is taught by the precept of men: Therefore, behold, I will proceed to do a marvellous work among this people, even a marvellous work and a wonder: for the wisdom of their wise men shall perish, and the understanding of their prudent men shall be hid.",
      torifuda: "and the understanding of their prudent men shall be hid.",
    },
    "Isaiah 53:3-5": {
      fullScripture:
        "He is despised and rejected of men; a man of sorrows, and acquainted with grief: and we hid as it were our faces from him; he was despised, and we esteemed him not. Surely he hath borne our griefs, and carried our sorrows: yet we did esteem him stricken, smitten of God, and afflicted. But he was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed.",
      torifuda: "and with his stripes we are healed.",
    },
    "Isaiah 58:6-7": {
      fullScripture:
        "Is not this the fast that I have chosen? to loose the bands of wickedness, to undo the heavy burdens, and to let the oppressed go free, and that ye break every yoke? Is it not to deal thy bread to the hungry, and that thou bring the poor that are cast out to thy house? when thou seest the naked, that thou cover him; and that thou hide not thyself from thine own flesh?",
      torifuda: "and that thou hide not thyself from thine own flesh?",
    },
    "Isaiah 58:13-14": {
      fullScripture:
        "If thou turn away thy foot from the sabbath, from doing thy pleasure on my holy day; and call the sabbath a delight, the holy of the Lord, honourable; and shalt honour him, not doing thine own ways, nor finding thine own pleasure, nor speaking thine own words: Then shalt thou delight thyself in the Lord; and I will cause thee to ride upon the high places of the earth, and feed thee with the heritage of Jacob thy father: for the mouth of the Lord hath spoken it.",
      torifuda: "for the mouth of the Lord hath spoken it.",
    },
    "Jeremiah 1:4-5": {
      fullScripture:
        "Then the word of the Lord came unto me, saying, Before I formed thee in the belly I knew thee; and before thou camest forth out of the womb I sanctified thee, and I ordained thee a prophet unto the nations.",
      torifuda: "and I ordained thee a prophet unto the nations.",
    },
    "Ezekiel 37:15-17": {
      fullScripture:
        "The word of the Lord came again unto me, saying, Moreover, thou son of man, take thee one stick, and write upon it, For Judah, and for the children of Israel his companions: then take another stick, and write upon it, For Joseph, the stick of Ephraim, and for all the house of Israel his companions: And join them one to another into one stick; and they shall become one in thine hand.",
      torifuda: "and they shall become one in thine hand.",
    },
    "Amos 3:7": {
      fullScripture:
        "Surely the Lord God will do nothing, but he revealeth his secret unto his servants the prophets.",
      torifuda: "but he revealeth his secret unto his servants the prophets.",
    },
    "Malachi 3:8-10": {
      fullScripture:
        "Will a man rob God? Yet ye have robbed me. But ye say, Wherein have we robbed thee? In tithes and offerings. Ye are cursed with a curse: for ye have robbed me, even this whole nation. Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it.",
      torifuda:
        "and pour you out a blessing, that there shall not be room enough to receive it.",
    },
    "Malachi 4:5-6": {
      fullScripture:
        "Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the Lord: And he shall turn the heart of the fathers to the children, and the heart of the children to their fathers, lest I come and smite the earth with a curse.",
      torifuda: "lest I come and smite the earth with a curse.",
    },
  },
  [StandardWork.NEW_TESTAMENT]: {
    "Matthew 5:14-16": {
      fullScripture:
        "Ye are the light of the world. A city that is set on an hill cannot be hid. Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house. Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
      torifuda: "and glorify your Father which is in heaven.",
    },
    "Matthew 11:28-30": {
      fullScripture:
        "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light.",
      torifuda: "For my yoke is easy, and my burden is light.",
    },
    "Matthew 16:15-19": {
      fullScripture:
        "He saith unto them, But whom say ye that I am? And Simon Peter answered and said, Thou art the Christ, the Son of the living God. And Jesus answered and said unto him, Blessed art thou, Simon Bar-jona: for flesh and blood hath not revealed it unto thee, but my Father which is in heaven. And I say also unto thee, That thou art Peter, and upon this rock I will build my church; and the gates of hell shall not prevail against it. And I will give unto thee the keys of the kingdom of heaven: and whatsoever thou shalt bind on earth shall be bound in heaven: and whatsoever thou shalt loose on earth shall be loosed in heaven.",
      torifuda:
        "and whatsoever thou shalt loose on earth shall be loosed in heaven.",
    },
    "Matthew 22:36-39": {
      fullScripture:
        "Master, which is the great commandment in the law? Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself.",
      torifuda: "Thou shalt love thy neighbour as thyself.",
    },
    "Matthew 28:19-20": {
      fullScripture:
        "Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.",
      torifuda: "I am with you alway, even unto the end of the world. Amen.",
    },
    "Luke 24:36-39": {
      fullScripture:
        "And as they thus spake, Jesus himself stood in the midst of them, and saith unto them, Peace be unto you. But they were terrified and affrighted, and supposed that they had seen a spirit. And he said unto them, Why are ye troubled? and why do thoughts arise in your hearts? Behold my hands and my feet, that it is I myself: handle me, and see; for a spirit hath not flesh and bones, as ye see me have.",
      torifuda: "for a spirit hath not flesh and bones, as ye see me have.",
    },
    "John 3:5": {
      fullScripture:
        "Jesus answered, Verily, verily, I say unto thee, Except a man be born of water and of the Spirit, he cannot enter into the kingdom of God.",
      torifuda: "he cannot enter into the kingdom of God.",
    },
    "John 14:6": {
      fullScripture:
        "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.",
      torifuda: "no man cometh unto the Father, but by me.",
    },
    "John 14:15": {
      fullScripture: "If ye love me, keep my commandments.",
      torifuda: "keep my commandments.",
    },
    "John 17:3": {
      fullScripture:
        "And this is life eternal, that they might know thee the only true God, and Jesus Christ, whom thou hast sent.",
      torifuda: "and Jesus Christ, whom thou hast sent.",
    },
    "Acts 2:36-38": {
      fullScripture:
        "Therefore let all the house of Israel know assuredly, that God hath made that same Jesus, whom ye have crucified, both Lord and Christ. Now when they heard this, they were pricked in their heart, and said unto Peter and to the rest of the apostles, Men and brethren, what shall we do? Then Peter said unto them, Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.",
      torifuda: "and ye shall receive the gift of the Holy Ghost.",
    },
    "Acts 3:19-21": {
      fullScripture:
        "Repent ye therefore, and be converted, that your sins may be blotted out, when the times of refreshing shall come from the presence of the Lord; And he shall send Jesus Christ, which before was preached unto you: Whom the heaven must receive until the times of restitution of all things, which God hath spoken by the mouth of all his holy prophets since the world began.",
      torifuda: "all his holy prophets since the world began.",
    },
    "1 Corinthians 6:19-20": {
      fullScripture:
        "What? know ye not that your body is the temple of the Holy Ghost which is in you, which ye have of God, and ye are not your own? For ye are bought with a price: therefore glorify God in your body, and in your spirit, which are God's.",
      torifuda: "and in your spirit, which are God's.",
    },
    "1 Corinthians 15:20-22": {
      fullScripture:
        "But now is Christ risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead. For as in Adam all die, even so in Christ shall all be made alive.",
      torifuda: "even so in Christ shall all be made alive.",
    },
    "1 Corinthians 15:40-42": {
      fullScripture:
        "There are also celestial bodies, and bodies terrestrial: but the glory of the celestial is one, and the glory of the terrestrial is another. There is one glory of the sun, and another glory of the moon, and another glory of the stars: for one star differeth from another star in glory. So also is the resurrection of the dead. It is sown in corruption; it is raised in incorruption:",
      torifuda: "it is raised in incorruption",
    },
    "Galatians 5:22-23": {
      fullScripture:
        "But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, Meekness, temperance: against such there is no law.",
      torifuda: "against such there is no law.",
    },
    "Ephesians 4:11-14": {
      fullScripture:
        "And he gave some, apostles; and some, prophets; and some, evangelists; and some, pastors and teachers; For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ: Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a perfect man, unto the measure of the stature of the fulness of Christ: That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine, by the sleight of men, and cunning craftiness, whereby they lie in wait to deceive;",
      torifuda: "whereby they lie in wait to deceive;",
    },
    "Philippians 4:13": {
      fullScripture:
        "I can do all things through Christ which strengtheneth me.",
      torifuda: "which strengtheneth me.",
    },
    "2 Thessalonians 2:1-3": {
      fullScripture:
        "Now we beseech you, brethren, by the coming of our Lord Jesus Christ, and by our gathering together unto him, That ye be not soon shaken in mind, or be troubled, neither by spirit, nor by word, nor by letter as from us, as that the day of Christ is at hand. Let no man deceive you by any means: for that day shall not come, except there come a falling away first, and that man of sin be revealed, the son of perdition;",
      torifuda: "and that man of sin be revealed, the son of perdition;",
    },
    "2 Timothy 3:15-17": {
      fullScripture:
        "And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus. All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, throughly furnished unto all good works.",
      torifuda: "throughly furnished unto all good works.",
    },
    "Hebrews 12:9": {
      fullScripture:
        "Furthermore we have had fathers of our flesh which corrected us, and we gave them reverence: shall we not much rather be in subjection unto the Father of spirits, and live?",
      torifuda: "be in subjection unto the Father of spirits, and live?",
    },
    "James 1:5-6": {
      fullScripture:
        "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him. But let him ask in faith, nothing wavering. For he that wavereth is like a wave of the sea driven with the wind and tossed.",
      torifuda: "like a wave of the sea driven with the wind and tossed.",
    },
    "James 2:17-18": {
      fullScripture:
        "Even so faith, if it hath not works, is dead, being alone. Yea, a man may say, Thou hast faith, and I have works: shew me thy faith without thy works, and I will shew thee my faith by my works.",
      torifuda: "I will shew thee my faith by my works.",
    },
    "1 Peter 4:6": {
      fullScripture:
        "For for this cause was the gospel preached also to them that are dead, that they might be judged according to men in the flesh, but live according to God in the spirit.",
      torifuda: "but live according to God in the spirit.",
    },
    "Revelation 20:12": {
      fullScripture:
        "And I saw the dead, small and great, stand before God; and the books were opened: and another book was opened, which is the book of life: and the dead were judged out of those things which were written in the books, according to their works.",
      torifuda: "which were written in the books, according to their works.",
    },
  },
  [StandardWork.BOOK_OF_MORMON]: {
    "1 Nephi 3:7": {
      fullScripture:
        "And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.",
      torifuda: "accomplish the thing which he commandeth them.",
    },
    "2 Nephi 2:25": {
      fullScripture:
        "Adam fell that men might be; and men are, that they might have joy.",
      torifuda: "that they might have joy.",
    },
    "2 Nephi 2:27": {
      fullScripture:
        "Wherefore, men are free according to the flesh; and all things are given them which are expedient unto man. And they are free to choose liberty and eternal life, through the great Mediator of all men, or to choose captivity and death, according to the captivity and power of the devil; for he seeketh that all men might be miserable like unto himself.",
      torifuda:
        "for he seeketh that all men might be miserable like unto himself.",
    },
    "2 Nephi 9:28-29": {
      fullScripture:
        "O that cunning plan of the evil one! O the vainness, and the frailties, and the foolishness of men! When they are learned they think they are wise, and they hearken not unto the counsel of God, for they set it aside, supposing they know of themselves, wherefore, their wisdom is foolishness and it profiteth them not. And they shall perish. But to be learned is good if they hearken unto the counsels of God.",
      torifuda:
        "But to be learned is good if they hearken unto the counsels of God.",
    },
    "2 Nephi 25:23,26": {
      fullScripture:
        "For we labor diligently to write, to persuade our children, and also our brethren, to believe in Christ, and to be reconciled to God; for we know that it is by grace that we are saved, after all we can do. And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.",
      torifuda: "to what source they may look for a remission of their sins.",
    },
    "2 Nephi 28:7-9": {
      fullScripture:
        "Yea, and there shall be many which shall say: Eat, drink, and be merry, for tomorrow we die; and it shall be well with us. And there shall also be many which shall say: Eat, drink, and be merry; nevertheless, fear God—he will justify in committing a little sin; yea, lie a little, take the advantage of one because of his words, dig a pit for thy neighbor; there is no harm in this; and do all these things, for tomorrow we die; and if it so be that we are guilty, God will beat us with a few stripes, and at last we shall be saved in the kingdom of God. Yea, and there shall be many which shall teach after this manner, false and vain and foolish doctrines, and shall be puffed up in their hearts, and shall seek deep to hide their counsels from the Lord; and their works shall be in the dark.",
      torifuda: "and their works shall be in the dark.",
    },
    "2 Nephi 31:19-20": {
      fullScripture:
        "And now, my beloved brethren, after ye have gotten into this strait and narrow path, I would ask if all is done? Behold, I say unto you, Nay; for ye have not come thus far save it were by the word of Christ with unshaken faith in him, relying wholly upon the merits of him who is mighty to save. Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.",
      torifuda: "behold, thus saith the Father: Ye shall have eternal life.",
    },
    "2 Nephi 32:3": {
      fullScripture:
        "Angels speak by the power of the Holy Ghost; wherefore, they speak the words of Christ. Wherefore, I said unto you, feast upon the words of Christ; for behold, the words of Christ will tell you all things what ye should do.",
      torifuda:
        "the words of Christ will tell you all things what ye should do.",
    },
    "2 Nephi 32:8-9": {
      fullScripture:
        "And now, my beloved brethren, I perceive that ye ponder still in your hearts; and it grieveth me that I must speak concerning this thing. For if ye would hearken unto the Spirit which teacheth a man to pray, ye would know that ye must pray; for the evil spirit teacheth not a man to pray, but teacheth him that he must not pray. But behold, I say unto you that ye must pray always, and not faint; that ye must not perform any thing unto the Lord save in the first place ye shall pray unto the Father in the name of Christ, that he will consecrate thy performance unto thee, that thy performance may be for the welfare of thy soul.",
      torifuda: "that thy performance may be for the welfare of thy soul.",
    },
    "Mosiah 2:17": {
      fullScripture:
        "And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings ye are only in the service of your God.",
      torifuda: "ye are only in the service of your God.",
    },
    "Mosiah 3:19": {
      fullScripture:
        "For the natural man is an enemy to God, and has been from the fall of Adam, and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord, and becometh as a child, submissive, meek, humble, patient, full of love, willing to submit to all things which the Lord seeth fit to inflict upon him, even as a child doth submit to his father.",
      torifuda: "even as a child doth submit to his father.",
    },
    "Mosiah 4:30": {
      fullScripture:
        "But this much I can tell you, that if ye do not watch yourselves, and your thoughts, and your words, and your deeds, and observe the commandments of God, and continue in the faith of what ye have heard concerning the coming of our Lord, even unto the end of your lives, ye must perish. And now, O man, remember, and perish not.",
      torifuda: "And now, O man, remember, and perish not.",
    },
    "Alma 7:11-13": {
      fullScripture:
        "And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people. And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities. Now the Spirit knoweth all things; nevertheless the Son of God suffereth according to the flesh that he might take upon him the sins of his people, that he might blot out their transgressions according to the power of his deliverance; and now behold, this is the testimony which is in me.",
      torifuda: "and now behold, this is the testimony which is in me.",
    },
    "Alma 32:21": {
      fullScripture:
        "And now as I said concerning faith—faith is not to have a perfect knowledge of things; therefore if ye have faith ye hope for things which are not seen, which are true.",
      torifuda: "ye hope for things which are not seen, which are true.",
    },
    "Alma 37:35": {
      fullScripture:
        "O, remember, my son, and learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God.",
      torifuda: "learn in thy youth to keep the commandments of God.",
    },
    "Alma 39:9": {
      fullScripture:
        "Now my son, I would that ye should repent and forsake your sins, and go no more after the lusts of your eyes, but cross yourself in all these things; for except ye do this ye can in nowise inherit the kingdom of God. Oh, remember, and take it upon you, and cross yourself in these things.",
      torifuda:
        "Oh, remember, and take it upon you, and cross yourself in these things.",
    },
    "Alma 41:10": {
      fullScripture:
        "Do not suppose, because it has been spoken concerning restoration, that ye shall be restored from sin to happiness. Behold, I say unto you, wickedness never was happiness.",
      torifuda: "I say unto you, wickedness never was happiness.",
    },
    "Helaman 5:12": {
      fullScripture:
        "And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
      torifuda: "a foundation whereon if men build they cannot fall.",
    },
    "3 Nephi 12:48": {
      fullScripture:
        "Therefore I would that ye should be perfect even as I, or your Father who is in heaven is perfect.",
      torifuda: "or your Father who is in heaven is perfect.",
    },
    "3 Nephi 18:15,20-21": {
      fullScripture:
        "Verily, verily, I say unto you, ye must watch and pray always, lest ye be tempted by the devil, and ye be led away captive by him. And whatsoever ye shall ask the Father in my name, which is right, believing that ye shall receive, behold it shall be given unto you. Pray in your families unto the Father, always in my name, that your wives and your children may be blessed.",
      torifuda: "that your wives and your children may be blessed.",
    },
    "Ether 12:6": {
      fullScripture:
        "And now, I, Moroni, would speak somewhat concerning these things; I would show unto the world that faith is things which are hoped for and not seen; wherefore, dispute not because ye see not, for ye receive no witness until after the trial of your faith.",
      torifuda:
        "for ye receive no witness until after the trial of your faith.",
    },
    "Ether 12:27": {
      fullScripture:
        "And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",
      torifuda: "then will I make weak things become strong unto them.",
    },
    "Moroni 7:41": {
      fullScripture:
        "And what is it that ye shall hope for? Behold I say unto you that ye shall have hope through the atonement of Christ and the power of his resurrection, to be raised unto life eternal, and this because of your faith in him according to the promise.",
      torifuda:
        "and this because of your faith in him according to the promise.",
    },
    "Moroni 7:45,47-48": {
      fullScripture:
        "And charity suffereth long, and is kind, and envieth not, and is not puffed up, seeketh not her own, is not easily provoked, thinketh no evil, and rejoiceth not in iniquity but rejoiceth in the truth, beareth all things, believeth all things, hopeth all things, endureth all things. But charity is the pure love of Christ, and it endureth forever; and whoso is found possessed of it at the last day, it shall be well with him. Wherefore, my beloved brethren, pray unto the Father with all the energy of heart, that ye may be filled with this love, which he hath bestowed upon all who are true followers of his Son, Jesus Christ; that ye may become the sons of God; that when he shall appear we shall be like him, for we shall see him as he is; that we may have this hope; that we may be purified even as he is pure. Amen.",
      torifuda: "that we may be purified even as he is pure. Amen.",
    },
    "Moroni 10:4-5": {
      fullScripture:
        "And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost. And by the power of the Holy Ghost ye may know the truth of all things.",
      torifuda: "ye may know the truth of all things.",
    },
  },
  [StandardWork.DOCTRINE_AND_COVENANTS]: {
    "Joseph Smith History 15-20": {
      fullScripture:
        "After I had retired to the place where I had previously designed to go, having looked around me, and finding myself alone, I kneeled down and began to offer up the desires of my heart to God. I had scarcely done so, when immediately I was seized upon by some power which entirely overcame me, and had such an astonishing influence over me as to bind my tongue so that I could not speak. Thick darkness gathered around me, and it seemed to me for a time as if I were doomed to sudden destruction. But, exerting all my powers to call upon God to deliver me out of the power of this enemy which had seized upon me, and at the very moment when I was ready to sink into despair and abandon myself to destruction—not to an imaginary ruin, but to the power of some actual being from the unseen world, who had such marvelous power as I had never before felt in any being—just at this moment of great alarm, I saw a pillar of light exactly over my head, above the brightness of the sun, which descended gradually until it fell upon me. It no sooner appeared than I found myself delivered from the enemy which held me bound. When the light rested upon me I saw two Personages, whose brightness and glory defy all description, standing above me in the air. One of them spake unto me, calling me by name and said, pointing to the other—This is My Beloved Son. Hear Him! My object in going to inquire of the Lord was to know which of all the sects was right, that I might know which to join. No sooner, therefore, did I get possession of myself, so as to be able to speak, than I asked the Personages who stood above me in the light, which of all the sects was right (for at this time it had never entered into my heart that all were wrong)—and which I should join. I was answered that I must join none of them, for they were all wrong; and the Personage who addressed me said that all their creeds were an abomination in his sight; that those professors were all corrupt; that: “they draw near to me with their lips, but their hearts are far from me, they teach for doctrines the commandments of men, having a form of godliness, but they deny the power thereof.” He again forbade me to join with any of them; and many other things did he say unto me, which I cannot write at this time. When I came to myself again, I found myself lying on my back, looking up into heaven. When the light had departed, I had no strength; but soon recovering in some degree, I went home. And as I leaned up to the fireplace, mother inquired what the matter was. I replied, “Never mind, all is well—I am well enough off.” I then said to my mother, “I have learned for myself that Presbyterianism is not true.” It seems as though the adversary was aware, at a very early period of my life, that I was destined to prove a disturber and an annoyer of his kingdom; else why should the powers of darkness combine against me? Why the opposition and persecution that arose against me, almost in my infancy?",
      torifuda: "persecution that arose against me, almost in my infancy?",
    },
    "Doctrine and Covenants 1:37-38": {
      fullScripture:
        "Search these commandments, for they are true and faithful, and the prophecies and promises which are in them shall all be fulfilled. What I the Lord have spoken, I have spoken, and I excuse not myself; and though the heavens and the earth pass away, my word shall not pass away, but shall all be fulfilled, whether by mine own voice or by the voice of my servants, it is the same.",
      torifuda:
        "whether by mine own voice or by the voice of my servants, it is the same.",
    },
    "Doctrine and Covenants 6:36": {
      fullScripture: "Look unto me in every thought; doubt not, fear not.",
      torifuda: "doubt not, fear not.",
    },
    "Doctrine and Covenants 8:2-3": {
      fullScripture:
        "Yea, behold, I will tell you in your mind and in your heart, by the Holy Ghost, which shall come upon you and which shall dwell in your heart. Now, behold, this is the spirit of revelation; behold, this is the spirit by which Moses brought the children of Israel through the Red Sea on dry ground.",
      torifuda: "through the Red Sea on dry ground.",
    },
    "Doctrine and Covenants 10:5": {
      fullScripture:
        "Pray always, that you may come off conqueror; yea, that you may conquer Satan, and that you may escape the hands of the servants of Satan that do uphold his work.",
      torifuda:
        "escape the hands of the servants of Satan that do uphold his work.",
    },
    "Doctrine and Covenants 13:1": {
      fullScripture:
        "Upon you my fellow servants, in the name of Messiah I confer the Priesthood of Aaron, which holds the keys of the ministering of angels, and of the gospel of repentance, and of baptism by immersion for the remission of sins; and this shall never be taken again from the earth, until the sons of Levi do offer again an offering unto the Lord in righteousness.",
      torifuda:
        "until the sons of Levi do offer again an offering unto the Lord in righteousness",
    },
    "Doctrine and Covenants 18:10-11": {
      fullScripture:
        "Remember the worth of souls is great in the sight of God; For, behold, the Lord your Redeemer suffered death in the flesh; wherefore he suffered the pain of all men, that all men might repent and come unto him.",
      torifuda: "that all men might repent and come unto him.",
    },
    "Doctrine and Covenants 18:15-16": {
      fullScripture:
        "And if it so be that you should labor all your days in crying repentance unto this people, and bring, save it be one soul unto me, how great shall be your joy with him in the kingdom of my Father! And now, if your joy will be great with one soul that you have brought unto me into the kingdom of my Father, how great will be your joy if you should bring many souls unto me!",
      torifuda: "bring many souls unto me!",
    },
    "Doctrine and Covenants 19:16-19": {
      fullScripture:
        "For behold, I, God, have suffered these things for all, that they might not suffer if they would repent; But if they would not repent they must suffer even as I; Which suffering caused myself, even God, the greatest of all, to tremble because of pain, and to bleed at every pore, and to suffer both body and spirit—and would that I might not drink the bitter cup, and shrink— Nevertheless, glory be to the Father, and I partook and finished my preparations unto the children of men.",
      torifuda: "finished my preparations unto the children of men.",
    },
    "Doctrine and Covenants 19:23": {
      fullScripture:
        "Learn of me, and listen to my words; walk in the meekness of my Spirit, and you shall have peace in me.",
      torifuda: "and you shall have peace in me.",
    },
    "Doctrine and Covenants 25:13": {
      fullScripture:
        "Wherefore, lift up thy heart and rejoice, and cleave unto the covenants which thou hast made.",
      torifuda: "and cleave unto the covenants which thou hast made.",
    },
    "Doctrine and Covenants 46:33": {
      fullScripture:
        "And ye must practice virtue and holiness before me continually. Even so. Amen.",
      torifuda: "holiness before me continually. Even so. Amen.",
    },
    "Doctrine and Covenants 58:27": {
      fullScripture:
        "Verily I say, men should be anxiously engaged in a good cause, and do many things of their own free will, and bring to pass much righteousness;",
      torifuda: "and bring to pass much righteousness;",
    },
    "Doctrine and Covenants 58:42-43": {
      fullScripture:
        "Behold, he who has repented of his sins, the same is forgiven, and I, the Lord, remember them no more. By this ye may know if a man repenteth of his sins—behold, he will confess them and forsake them.",
      torifuda: "behold, he will confess them and forsake them.",
    },
    "Doctrine and Covenants 64:9-11": {
      fullScripture:
        "Wherefore, I say unto you, that ye ought to forgive one another; for he that forgiveth not his brother his trespasses standeth condemned before the Lord; for there remaineth in him the greater sin. I, the Lord, will forgive whom I will forgive, but of you it is required to forgive all men. And ye ought to say in your hearts—let God judge between me and thee, and reward thee according to thy deeds.",
      torifuda: "and reward thee according to thy deeds.",
    },
    "Doctrine and Covenants 76:22-24": {
      fullScripture:
        "And now, after the many testimonies which have been given of him, this is the testimony, last of all, which we give of him: That he lives! For we saw him, even on the right hand of God; and we heard the voice bearing record that he is the Only Begotten of the Father—That by him, and through him, and of him, the worlds are and were created, and the inhabitants thereof are begotten sons and daughters unto God.",
      torifuda:
        "the inhabitants thereof are begotten sons and daughters unto God.",
    },
    "Doctrine and Covenants 76:40-41": {
      fullScripture:
        "And this is the gospel, the glad tidings, which the voice out of the heavens bore record unto us—That he came into the world, even Jesus, to be crucified for the world, and to bear the sins of the world, and to sanctify the world, and to cleanse it from all unrighteousness;",
      torifuda: "and to cleanse it from all unrighteousness;",
    },
    "Doctrine and Covenants 78:19": {
      fullScripture:
        "And he who receiveth all things with thankfulness shall be made glorious; and the things of this earth shall be added unto him, even an hundred fold, yea, more.",
      torifuda: "even an hundred fold, yea, more.",
    },
    "Doctrine and Covenants 82:10": {
      fullScripture:
        "I, the Lord, am bound when ye do what I say; but when ye do not what I say, ye have no promise.",
      torifuda: "but when ye do not what I say, ye have no promise.",
    },
    "Doctrine and Covenants 88:124": {
      fullScripture:
        "Cease to be idle; cease to be unclean; cease to find fault one with another; cease to sleep longer than is needful; retire to thy bed early, that ye may not be weary; arise early, that your bodies and your minds may be invigorated.",
      torifuda:
        "arise early, that your bodies and your minds may be invigorated.",
    },
    "Doctrine and Covenants 89:18-21": {
      fullScripture:
        "And all saints who remember to keep and do these sayings, walking in obedience to the commandments, shall receive health in their navel and marrow to their bones; And shall find wisdom and great treasures of knowledge, even hidden treasures; And shall run and not be weary, and shall walk and not faint. And I, the Lord, give unto them a promise, that the destroying angel shall pass by them, as the children of Israel, and not slay them. Amen.",
      torifuda: "and not slay them. Amen.",
    },
    "Doctrine and Covenants 107:8": {
      fullScripture:
        "The Melchizedek Priesthood holds the right of presidency, and has power and authority over all the offices in the church in all ages of the world, to administer in spiritual things.",
      torifuda: "to administer in spiritual things.",
    },
    "Doctrine and Covenants 121:36,41-42": {
      fullScripture:
        "That the rights of the priesthood are inseparably connected with the powers of heaven, and that the powers of heaven cannot be controlled nor handled only upon the principles of righteousness. No power or influence can or ought to be maintained by virtue of the priesthood, only by persuasion, by long-suffering, by gentleness and meekness, and by love unfeigned; By kindness, and pure knowledge, which shall greatly enlarge the soul without hypocrisy, and without guile—",
      torifuda: "without hypocrisy, and without guile—",
    },
    "Doctrine and Covenants 130:22-23": {
      fullScripture:
        "The Father has a body of flesh and bones as tangible as man's; the Son also; but the Holy Ghost has not a body of flesh and bones, but is a personage of Spirit. Were it not so, the Holy Ghost could not dwell in us. A man may receive the Holy Ghost, and it may descend upon him and not tarry with him.",
      torifuda: "and it may descend upon him and not tarry with him.",
    },
    "Doctrine and Covenants 131:1-4": {
      fullScripture:
        "In the celestial glory there are three heavens or degrees; And in order to obtain the highest, a man must enter into this order of the priesthood [meaning the new and everlasting covenant of marriage]; And if he does not, he cannot obtain it. He may enter into the other, but that is the end of his kingdom; he cannot have an increase.",
      torifuda: "he cannot have an increase.",
    },
  },
};

const getWords = (passage: string): string[] => {
  return passage
    .split(" ")
    .map((word) => word.replace(/[.,\/#!$%^&*;:{}=\-_`~()]/g, ""));
};

const getUniqueStarts = (passages: string[]): string[] => {
  return passages.map((passage) => {
    const words = getWords(passage);
    let uniqueWords = words[0];

    let otherPassages = [...passages];

    words.forEach((word, wordIndex) => {
      if (!otherPassages.length) return;
      if (wordIndex !== 0) uniqueWords += ` ${word}`;

      otherPassages = otherPassages.filter((otherPassage) => {
        if (otherPassage === passage) return false;
        const otherWords = getWords(otherPassage);
        if (otherWords.length <= wordIndex) return false;
        const otherWord = otherWords[wordIndex];
        if (otherWord === word) return true;
        return false;
      });
    });

    return uniqueWords;
  });
};

export const getUniqueScriptureStarts = (
  decks: StandardWork[]
): ScriptureData[] => {
  const scripturesWithReferences = Object.entries(scripturePassages)
    .filter(([standardWork]) => decks.includes(standardWork as StandardWork))
    .map(([standardWork, passages]) => {
      return Object.entries(passages).map(([reference, scripture]) => {
        return {
          ...scripture,
          reference,
          standardWork: standardWork as StandardWork,
        };
      });
    })
    .flat();

  const fullScriptures = scripturesWithReferences.map(
    (scripture) => scripture.fullScripture
  );

  const uniqueStarts = getUniqueStarts(fullScriptures);

  const scripturesWithUniqueStarts: ScriptureData[] =
    scripturesWithReferences.map((scripture, index) => ({
      ...scripture,
      uniqueStart: uniqueStarts[index],
    }));

  const sortedStarts = scripturesWithUniqueStarts.sort((a, b) =>
    a.uniqueStart.localeCompare(b.uniqueStart)
  );

  return sortedStarts;
};

export const getSrc = (
  language: Language,
  scriptureData: ScriptureData
): string => {
  const { reference, standardWork } = scriptureData;
  const fileName = `${reference
    .replaceAll(" ", "_")
    .replaceAll(",", "and")
    .replaceAll(":", "_")}.m4a`;

  return `${s3BucketUrl}/${language}/${standardWork
    .toLowerCase()
    .replaceAll(" ", "")}/${fileName}`;
};
