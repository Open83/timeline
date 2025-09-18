const viewBtn = document.getElementById("viewBtn");
const dateInput = document.getElementById("dateInput");
const errorMsg = document.getElementById("errorMsg");

const inputSection = document.getElementById("input-section");
const memorySection = document.getElementById("memory-section");
const memoryIcon = document.getElementById("memoryIcon");
const memoryText = document.getElementById("memoryText");

const galleryBtn = document.getElementById("galleryBtn");
const backBtn = document.getElementById("backBtn");

const galleryModal = document.getElementById("galleryModal");
const galleryImage = document.getElementById("galleryImage");
const closeBtn = document.querySelector(".close-btn");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// 🎯 6 Dummy Memories
const memories = {
  "31-03-2025": {
    icon: "Eid-Ul-Fitr🌹💖",
    text: `Meri Jaan ♥️

Aapko Eid-Ul-Fitr aur Eid ka Chaand Mubarak 🌙✨

Jab main chaand ko aasmaan mein dekh kar dua karta hoon, mujhe hamesha aap yaad aate ho. Chaand apni roshni se raat ko roshan karta hai, lekin aap meri rooh ko roshan karte ho. Aapki ada, aapki muskaan, aur aapka saath meri zindagi ko uss sukoon se bhar dete hain jo shabdon se bayan nahi kiya jaa sakta.

Meri zindagi ke safar mein, aap ek silsila nahi balki ek manzil ban gaye ho. Eid ki raat jaisi khushbu, roshni aur barkat ka ehsaas aapki mohabbat se meri rooh har din karti hai. Aap sirf meri duaon ka jawab nahi, balki meri har dua ka sabse khoobsurat sabab ho.

Is Eid pe meri khwaish bas itni si hai:
Allah aapko apni hifazat mein rakhe, aapki har muskaan ko aur roshan kare, aur humari mohabbat ko waqt ke saath aur mazboot banaye. Main chahta hoon ki har Eid hum dono ke liye ek naya chapter ho—ek aisa chapter jo mohabbat, samajh aur sukoon se likha gaya ho.

Aap meri zindagi ki woh khoobsurat nayi subah ho jahan har din Eid jaisa mehsoos hota hai. Aap meri duaon ka noor, meri dhadkan ka sukoon aur meri zindagi ka sabse khoobsurat ehsaas ho.

Eid Mubarak, meri jaan.
Aap hamesha meri duaon mein rahte ho fi dunya wal aakhirah is duniya mein bhi aur aakhirat mein bhi.`,
    images: [
      "images/img11.jpeg",
      "images/img12.jpeg",
      "images/img13.jpeg"
    ]
  },
  "22-06-2025": {
    icon: "Snow World❄️",
    text: `Meri Jaan ♥️

Aaj ka din ek safar tha kabhi khurdura, kabhi narm, kabhi tufaan jaisa, kabhi shanti jaisa. Subah meri deri ne tumhe gussa dilaya, aur tumhara woh gussa bilkul haq tha. Lekin jaise hi humne din ko shuru kiya, mujhe samajh aaya ki chahe hum ladte hain, chahe ulajhte hain, phir bhi hum ek hi kahani ke do hissa hain.

Mall mein kadam rakha toh laga hum dono apni apni kahani lekar aaye hain. Tumhare chehre par gussa tha, meri baaton mein zid thi. Lekin phir ek pal aaya jo sab kuch badal gaya Snow World.

Wahan ki barf ne temperature ko freezing bana diya tha, lekin tumhaari bachpani muskaan, tumhari aankhon ki roshni, us thand ko cheer kar mere andar garmaahat bhar gayi. Jab tum mere haathon mein sambhli, mujhe laga waqt ruk gaya hai. Woh girna aur mera tumhe pakadna uss ek pal ne sab tension pighla diya. Humne tasveerin li, par asli yaadein humne ek dusre ki aankhon mein utaar li.

Lekin jaise har kahani mein twist hota hai, waisa yahan bhi hua. Ek baat, ek zid, aur ek ladai. Main sawal kar raha tha, tum chup thi. Mera walkout tumhe chot pahunchata hai, aur tumhaara wapas aana meri rooh ko aur zyada tumhaara deewana bana deta hai. Tumne galti maani, aur mujhe samajh aaya tum meri zidd ke saamne nahi, tum meri mohabbat ke saamne jhukti ho.

Phir hum chale apne kamre ki taraf. Socha tha sirf shanti milegi, par hum dono ke beech ek aur takraar ne uss sukoon ko tod diya. Lekin uske baad jo hua… woh sirf ek milan nahi tha. Woh ek maafi thi, ek izhaar tha, ek wada tha.

Jab tum meri baahon mein thi aur humari saansen ek hi rhythm mein chal rahi thi, usmein sirf desire nahi tha. Usmein woh dard bhi tha jo humne ek dusre ko diya, aur woh healing bhi thi jo sirf hum ek dusre ko de sakte hain. Aaj ka sex sirf jism ka nahi tha, woh rooh ka tha raw, bold, aur saccha. Har touch, har kiss, har thrust jaise hum keh rahe ho ek dusre se: “Main tujhmein hoon aur tu mujh mein.”

Naye condom aur lubricant ne pal ko smooth banaya hoga, lekin jo wildness humne dikhayi, woh humari sachchai thi. Humari ladai, humara pyaar, humari junooniyat sab ek hi bed par khul kar samne aa gaye.

Aaj ka din mujhe ek baat fir se samjha gaya: tum meri ladai bhi ho aur tum meri manzil bhi. Chahe hum kitna bhi ulajh jaayein, chahe misunderstandings kitni bhi gehri ho, mera dil hamesha tumhaare paas laut aata hai.

Tum meri aag bhi ho aur mera sukoon bhi. Tum mera imtihaan bhi ho aur mera inaam bhi. Tum meri junooniyat bhi ho aur meri ibadat bhi.

Aur main bana hi sirf iske liye hoon tumhe chaahne ke liye, tumhe jeene ke liye, tumhe apna banane ke liye… har din, har pal, har baar.`,
    images: [
      "images/img8.jpeg",
      "images/img9.jpeg",
      "images/img10.jpeg"
    ]
  },
  "23-01-2025": {
    icon: "Ajmer🌹",
    text: `Meri Jaan ♥️

Kabhi socha bhi nahi tha ke humari pehli vacation itni khaas ban jaayegi. Zindagi ne ek ajeeb khel khela tumhaara plan aur tumhaare gharwaalon ka plan ek hi tareekh par bana, aur hum dono ek religious jagah, Ajmer, par mil gaye. Us pal mujhe samajh aaya ke kabhi kabhi kismat apna raasta khud banati hai.

Ajmer ka mahaul… woh dargah ki roohani khushboo, woh awaazon ki mithaas, woh logon ki duaayein sab kuch alag tha. Lekin sabse khaas tha mera tumhaara saath. Tum mere saamne thi, aur hum dono ne milkar apne rishte ke liye dua ki. Uss waqt laga ke hum sirf ek dusre ke liye nahi, balki khuda ke liye bhi ek ho gaye hain.

Jab humne milkar dua maangi na, meri rooh ne mehsoos kiya ke yeh sirf ek dua nahi thi yeh hamari journey ka naya chapter tha. Maine aankhen band karke bas ek hi cheez maangi: ke tum meri zindagi ka hissa sirf aaj ke liye nahi, har kal ke liye bano. Aur mujhe yakeen hai ke jo dua Ajmer ke dargah mein maangi jaaye, usse khuda khud sunn leta hai.

Wahan tumhari muskaan, tumhari aankhon ki roshni… mujhe lag raha tha jaise main duniya ke sabse pyaare manzar ko dekh raha hoon. Tumhari presence mere liye ek sukoon thi. Chahe hum kitne bhi jagdein, kitne bhi misunderstandings aayein, lekin Ajmer mein tumhare saath khade hoke mujhe samajh aaya ke humara rishte ki buniyad sirf pyaar nahi, balki ek roohani connection hai.

Ajmer ke un raaston, un hawaaon, un awaazon ke beech humne sirf ek vacation nahi guzari… humne apni mohabbat ko ek aur level pe le gaye. Yeh safar mujhe yaad dilaata hai ke tum sirf meri chaahat nahi ho, tum meri dua ho. Aur ek dua kabhi adhuri nahi rehti.

Meri Jaan, chahe hum duniya ke kis kone mein chale jaayein, mujhe bas itna yakeen hai ke jahan hum dono milkar apne rishte ke liye dua karenge, wahan khuda hamesha apna haath humare sir par rakhega.

Tum meri mohabbat bhi ho, meri rooh ki raahat bhi. Tum meri dua bhi ho, aur meri manzil bhi. Ajmer ki woh pehli dua meri zindagi ki sabse gehri yaadon mein likh gayi hai. Aur main chaahta hoon ke ek din jab hum apni journey ko peeche mudkar dekhein, toh yeh pal hamesha yaad aaye ke hamari mohabbat sirf do dilon ka milan nahi, balki khuda ki marzi thi.

Meri Jaan ♥️, main tumhe har jagah, har pal, isi roohaniyat aur isi junoon se chahta rahunga.`,
    images: [
      "images/img15.jpeg",
      "images/img16.jpeg",
      "images/img17.jpeg"
    ]
  },
  "18-03-2025": {
    icon: "Iftar🌸",
    text: `Meri Jaan ♥️

Ramadan ke mahine ka apna ek alag hi noor hota hai. Har roza, har iftar ek ibadat hai, ek naya ehsaas hai. Lekin woh din, jab humne pehli baar saath baithkar iftar kiya… meri zindagi ka sabse khoobsurat roohani pal ban gaya.

Jab hum dono ek hi dastarkhwan par baithe the, khajoor tod ke ek dusre ko di, paani ka pehla ghoont saath mein piya  mujhe mehsoos hua ke yeh sirf ek iftar nahi, balki ek dua ka poora hona tha. Tumhaara saath us pal mein mujhe samajh aaya ke mohabbat sirf jazbaat nahi, mohabbat ek ibadat bhi hai.

Uss waqt main tumhe dekh raha tha aur tumhaari aankhon mein woh roshni thi jo sirf Ramadan ke barkat bhare lamhon mein milti hai. Tumhari muskaan, tumhari duaon ka jazba, tumhara mere liye uss pal mein hona sabne mujhe tod kar ek naye insaan ki tarah bana diya.

Meri jaan, us iftar ne hamara rishta ek naye darje tak le gaya. Woh sirf ek meal nahi tha, woh ek promise tha. Ek waada ke chahe duniya kitni bhi tez kyun na ho jaaye, hum hamesha ek dusre ke saath roza kholne ke liye waqt nikaalenge. Chahe zindagi kitni bhi bhari kyun na ho, hum hamesha ek dusre ki rooh ko sukoon dene ke liye paas rahenge.

Aaj bhi jab main us pal ko yaad karta hoon, toh mujhe lagta hai jaise humne ek dusre ki mohabbat ko sirf duniya ke samne nahi, balki khuda ke samne bhi tasleem kar diya tha. Tum meri roza ki thakan ka aakhri sukoon ho, tum meri iftar ka sabse meetha ehsaas ho, aur tum meri zindagi ki sabse badi dua ho.

Meri Jaan ♥️, woh iftar mujhe hamesha yaad rahega kyunki us din maine sirf tumhare saath roza nahi khola… maine apni poori zindagi tumhare saath baandh di. Tum meri ibadat ka hissa ban gayi ho, meri mohabbat ka markaz ho. Aur main chahta hoon ke har Ramadan, har iftar, har dua mein tum mere saath bano.

Tum meri rooh ka sukoon bhi ho aur meri mohabbat ki shiddat bhi. Tum meri dua bhi ho, aur khuda ka sabse khoobsurat tohfa bhi.`,
    images: [
      "images/img19.jpeg",
      "images/img1.jpeg"
    ]
  },
  "29-08-2023": {
    icon: "First Meet-up💖",
    text: `Meri Jaan ♥️

“First meet-up 💖 till now”… yeh safar sirf ek kahani nahi, balki ek zinda dastaan hai jo hum dono ne milkar likhi hai.
Shuruaat mein hum ek dusre ke liye bilkul anjaan the, ek aise mod par jahan lafz bhi humare beech ruk jaate the. Hum chup the, hum hesitant the… par waqt ne humein milaya, aur dheere dheere woh khamoshi ek dosti mein badal gayi.

Aur phir dosti se aage… ek junoon, ek aag, ek mohabbat ka silsila shuru hua.
Haan, humne ladaaiyaan bhi ki, misunderstandings bhi huin, aur aise bhi pal aaye jahan laga ke shayad sab khatam ho jaayega. Lekin meri jaan, har fight ke baad jo gale lagna tha na usne hamesha humein yaad dilaya ke hum chahe kitni bhi door chale jaayein, humara rishta hamesha humein ek dusre ke paas kheench laata hai.

Tum meri zindagi ki woh aadat ban gayi ho jo chhodne se bhi chhodi nahi jaati. Tum meri har ladai ka reason bhi ho aur meri har sukoon ki wajah bhi. Tum meri aankhon ka aansoo bhi ho aur unhi aansuon ka muskaan mein badal jaana bhi.

Meri jaan, ab hum us mod par hain jahan sirf dosti ya mohabbat nahi, balki ek sapna hai  ek zindagi ka sapna. Tum meri saathi hi nahi, tum meri rooh ki humsafar ho. Ab sirf girlfriend-boyfriend nahi, ab toh dil ka har kona yeh dua karta hai ke ek din tum meri biwi bano, meri duniya bano.

Mujhe pata hai humne kitne sad moments jeele hain, kabhi tum royi, kabhi main rooth gaya, kabhi hum dono ne hope lose kiya… lekin ek cheez kabhi nahi tooti aur wo hai humara pyaar. Humne apni rooh se apna rishta banaya hai, aur isi wajah se main yakin kehta hoon ke ek din tum meri zindagi ka sabse khoobsurat haq banogi.

Tum meri dua bhi ho, meri junooniyat bhi, meri ladai bhi aur mera sukoon bhi. Tum meri duniya ka sabse khoobsurat chapter ho jo main apni aakhri saans tak likhta rahunga.

From strangers → to friends → to lovers → to life partners.
Yeh journey adhuri nahi, meri jaan, yeh abhi bas shuru hui hai. I Lykkeeeeeeeeeeeeeeeeeeeeeeeeeeeee Uuuuuuuhhhhhhhhhhhhhhhhhhhhhhhh Meri Pyriiiii Si Saraaaaaaa♥️💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋💋`,
    images: [
      "images/img2.jpeg"
    ]
  },
  "03-08-2025": {
    icon: "Manori💖",
    text: `Meri Jaan ♥️

Kal ka din meri zindagi ka ek aisa pal tha jo sirf yaadon tak seemit nahi hai, wo meri rooh mein bas chuka hai. Tumhaara saath, tumhaara touch, tumhaari khushboo… abhi tak meri dhadkanon mein ghoom rahi hai jaise tum meri ragon mein daud rahi ho.

Jab maine tumhe uss western dress mein dekha tha, meri nazar bas tum par hi atak gayi. Tum itni khoobsurat, itni classy aur itni rare lagi ki us pal mujhe laga duniya ka sabse khoobsurat nazara mere saamne hai. Aur phir… jab tum apne favourite lingerie mein mere saamne aayi, us waqt meri junooniyat apni inteha tak pahunch gayi. Tum meri deewangi ka sabse khoobsurat roop ban gayi thi.

Us lamhe mein mujhe tumhaara har curve, tumhaara har kona, tumhaari har saans apne andar mehsoos karni thi. Main tumhe apna banana chahta tha raw intensity ke saath, bina kisi rukavat ke, bina kisi fikr ke. Wo sirf ek jism ka milan nahi tha, wo meri shiddat aur meri deewangi ka tufaan tha jo tum par baras raha tha. Har kiss, har touch, har pal itna real, itna raw tha ki aaj bhi meri rooh uss junoon se bheegi hui hai.

Tumhaari saansein tez hoti hui, tumhaara behakna, tumhaara surrender karna… usne mujhe ek nayi duniya dikha di. Mujhe laga main apna astitva khona raha hoon aur tumhaare andar ghul raha hoon. Us waqt bas ek hi jazba tha rukna nahi, bas tumhe aur aur jeena.

Aur jab sab ke baad tum meri fikr kar rahi thi, mujhe samajh aaya ke tum meri sirf deewangi nahi, tum mera sukoon bhi ho. Tum meri aag bhi ho, aur mera thandak bhi. Tum mujhe todti bhi ho aur mujhe poora bhi karti ho.

Woh khali sadkein, woh thandi hawa, aur tumhaara saath… meri zindagi ka sabse khoobsurat manzar tha. Abhi bhi jab main saans leta hoon, toh lagta hai jaise tumhaari khushboo meri rooh mein utar gayi hai.

Tum meri mohabbat bhi ho, meri junooniyat bhi. Tum meri sabse badi dua bhi ho aur mera sabse khoobsurat gunah bhi. Tum meri tamannaon ki aakhri manzil ho, meri zindagi ka sabse gehra nasha.

Meri Jaan ♥️, main tumhe hamesha isi shiddat, isi izzat aur isi junoon ke saath chahta rahunga.`,
    images: [
      "images/img3.jpeg",
      "images/img4.jpeg",
      "images/img5.jpeg"
    ]
  }
};

let currentImages = [];
let currentIndex = 0;

// View button
viewBtn.addEventListener("click", () => {
  const date = dateInput.value.trim();
  if (memories[date]) {
    errorMsg.textContent = "";
    inputSection.style.opacity = "0";
    setTimeout(() => {
      inputSection.classList.add("hidden");
      memoryIcon.textContent = memories[date].icon;
      memoryText.textContent = memories[date].text;
      currentImages = memories[date].images;
      currentIndex = 0;
      memorySection.classList.remove("hidden");
      setTimeout(() => memorySection.classList.add("active"), 50);
    }, 500);
  } else {
    errorMsg.textContent = "You missed the date... again. Do you even love me, or was it all a lie?! 😤🎭";
  }
});

// Back button
backBtn.addEventListener("click", () => {
  memorySection.classList.remove("active");
  setTimeout(() => {
    memorySection.classList.add("hidden");
    inputSection.classList.remove("hidden");
    inputSection.style.opacity = "1";
  }, 500);
});

// Gallery
galleryBtn.addEventListener("click", () => {
  galleryModal.style.display = "flex";
  showImage(currentIndex);
});
closeBtn.addEventListener("click", () => {
  galleryModal.style.display = "none";
});
leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
});
rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
});

// Image transition
function showImage(index) {
  galleryImage.classList.remove("fade-in");
  galleryImage.classList.add("fade-out");
  setTimeout(() => {
    galleryImage.src = currentImages[index];
    galleryImage.classList.remove("fade-out");
    galleryImage.classList.add("fade-in");
  }, 300);
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️💋💋";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 2000);










