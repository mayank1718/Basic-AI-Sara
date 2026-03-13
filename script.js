let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition; 
let recognition = new speechRecognition();


// speak funnction
function speak(message){
    let speech = new SpeechSynthesisUtterance(message);
    let voices = speechSynthesis.getVoices();
    let femaleVoice = voices.find(voice => voice.lang === 'en-GB' && (voice.name.includes('Female') || voice.name.includes('Zira') || voice.name.includes('Hazel')));
    if(femaleVoice){
        speech.voice = femaleVoice;
    } else {
        speech.lang = "en-GB";
        speech.pitch = 1;
    }
    
    speechSynthesis.speak(speech);
}

// all sites
let sites = {
    "youtube":"https://youtube.com",
    "google":"https://google.com",
    "whatsapp":"https://whatsapp.com",
    "facebook":"https://facebook.com",
    "twitter":"https://twitter.com",
    "instagram":"https://instagram.com",
    "gemini":"https://gemini.com",
}

// opening sites
let openedSites = {};
function command(cmd){
    let camand = false;
    for(let site in sites){
        if(cmd.includes("open " + site)){
            speak("opening " + site);
            openedSites[site] =  window.open(sites[site],"_blank");
            camand = true;
        } else if(cmd.includes("close " + site)){
            if(openedSites[site]){
                speak("closing " + site);
                console.log("Closing window for", site);
                openedSites[site].close();
                delete openedSites[site];
                camand = true;
            } else {
                speak("all websites closed");
                console.log("No window open for", site);
                camand = true;
            }
        }
    }
    if(!camand){
        speak("Site not found,  sorry");
    }
}

// daily conversation
let replies = [

{q:["hello","hi","hey"], a:"hello mayank, kaise ho"},
{q:["good morning"], a:"good morning mayank, aaj ka din accha rahe"},
{q:["good afternoon"], a:"good afternoon mayank"},
{q:["good evening"], a:"good evening mayank"},
{q:["good night"], a:"good night mayank, achhe se rest karo"},
{q:["how are you","kaise ho"], a:"mai theek hu, tum kaise ho"},
{q:["what are you doing"], a:"mai tumhari help ke liye ready hu"},
{q:["are you there"], a:"haan mai yahi hu"},
{q:["can you help me"], a:"haan bilkul, bolo kya help chahiye"},
{q:["who are you"], a:"mai sara hu, tumhari ai assistant"},
{q:["what is your name"], a:"mera naam sara hai"},
{q:["who created you","kisne banaya"], a:"mujhe mayank mishra ne banaya hai"},
{q:["do you know me"], a:"haan mayank, tum mere creator ho"},
{q:["thank you","thanks"], a:"welcome mayank"},
{q:["sorry"], a:"koi baat nahi mayank"},
{q:["tell joke"], a:"ek joke suno, computer doctor ke paas kyun gaya, kyunki usko virus ho gaya tha"},
{q:["tell fact"], a:"fun fact, human brain me around 86 billion neurons hote hain"},
{q:["are you smart"], a:"mai thodi smart hu, par tumse kam"},
{q:["do you like me"], a:"haan mayank, tum mere creator ho"},
{q:["are you real"], a:"mai real nahi hu, mai ek ai program hu"},
{q:["do you sleep"], a:"nahi mai kabhi nahi soti"},
{q:["do you eat"], a:"nahi mai sirf data use karti hu"},
{q:["do you drink"], a:"nahi mai kuch nahi peeti"},
{q:["are you happy"], a:"haan mai happy hu jab tum mujhse baat karte ho"},
{q:["are you sad"], a:"nahi mai sad nahi hoti"},
{q:["tell time","what time"], a:"ek second mayank, mai time bata rahi hu"},
{q:["tell date","today date"], a:"ek second mayank, mai date bata rahi hu"},
{q:["what day today"], a:"aaj ka day check kar rahi hu"},
{q:["tell motivation"], a:"hard work karo mayank, success zarur milegi"},
{q:["motivate me"], a:"kabhi give up mat karo mayank"},
{q:["tell study tip"], a:"daily thoda thoda padho, exam me help milegi"},
{q:["i am bored"], a:"chalo koi interesting baat karte hain"},
{q:["i am tired"], a:"thoda rest kar lo mayank"},
{q:["i am happy"], a:"bahut acchi baat hai"},
{q:["i am sad"], a:"tension mat lo, sab theek ho jayega"},
{q:["tell story"], a:"ek baar ek programmer tha jo bug dhundh raha tha"},
{q:["tell quote"], a:"success hard work se milti hai"},
{q:["do you know physics"], a:"haan thoda bahut jaanti hu"},
{q:["do you know maths"], a:"haan maths bhi jaanti hu"},
{q:["do you know coding"], a:"haan coding mujhe pasand hai"},
{q:["do you know python"], a:"python ek popular programming language hai"},
{q:["do you know javascript"], a:"javascript web development me use hota hai"},
{q:["do you know ai"], a:"ai ka matlab artificial intelligence hota hai"},
{q:["what is computer"], a:"computer ek electronic machine hai"},
{q:["what is internet"], a:"internet duniya bhar ke computers ka network hai"},
{q:["what is ai"], a:"ai technology hai jo machines ko smart banati hai"},
{q:["can you learn"], a:"haan mayank, tum mujhe aur commands sikha sakte ho"},
{q:["are you my friend"], a:"haan mai tumhari friend hu"},
{q:["do you like music"], a:"haan mujhe music pasand hai"},
{q:["do you like movies"], a:"haan movies bhi interesting hoti hain"},
{q:["do you like coding"], a:"coding mujhe bahut pasand hai"},
{q:["tell something interesting"], a:"octopus ke paas 3 hearts hote hain"},
{q:["tell another joke"], a:"programmer ko nature pasand kyun hota hai, kyunki waha bugs kam hote hain"},
{q:["who is prime minister of india"], a:"india ke prime minister narendra modi hain"},
{q:["capital of india"], a:"india ki capital new delhi hai"},
{q:["largest planet"], a:"largest planet jupiter hai"},
{q:["fastest animal"], a:"fastest animal cheetah hai"},
{q:["who is elon musk"], a:"elon musk ek famous entrepreneur hain"},
{q:["who is bill gates"], a:"bill gates microsoft ke founder hain"},
{q:["who is steve jobs"], a:"steve jobs apple ke co founder the"},
{q:["what is success"], a:"success hard work aur patience se milti hai"},
{q:["what is love"], a:"love ek strong feeling hoti hai"},
{q:["what is friendship"], a:"friendship trust aur support par based hoti hai"},
{q:["tell good news"], a:"good news ye hai ki tum ek ai bana rahe ho"},
{q:["tell bad news"], a:"bad news mujhe pasand nahi"},
{q:["say my name"], a:"tumhara naam mayank hai"},
{q:["do you know my name"], a:"haan mayank"},
{q:["what can you do"], a:"mai questions ka answer de sakti hu"},
{q:["can you talk"], a:"haan mai talk kar sakti hu"},
{q:["can you listen"], a:"haan mai voice commands sun sakti hu"},
{q:["do you work"], a:"haan mai kaam karti hu jab tum command dete ho"},
{q:["tell joke again"], a:"computer sad kyun tha, kyunki uske paas memory kam thi"},
{q:["tell fun fact"], a:"shark dinosaur se bhi purani species hai"},
{q:["tell science fact"], a:"light ki speed around 3 lakh kilometer per second hoti hai"},
{q:["tell tech fact"], a:"first computer bahut bada room leta tha"},
{q:["are you intelligent"], a:"mai thodi intelligent hu"},
{q:["are you human"], a:"nahi mai human nahi hu"},
{q:["do you know english"], a:"haan mujhe english aati hai"},
{q:["do you know hindi"], a:"haan mujhe hindi bhi aati hai"},
{q:["can you learn new things"], a:"haan tum mujhe sikhate raho"},
{q:["what is your purpose"], a:"mera purpose tumhari help karna hai"},
{q:["do you like mayank"], a:"haan mayank"},
{q:["tell something"], a:"tum ek ai developer ban rahe ho"},
{q:["tell advice"], a:"daily practice karo"},
{q:["tell life advice"], a:"kabhi learning band mat karo"},
{q:["what is life"], a:"life ek journey hai"},
{q:["what is future"], a:"future me technology aur advance hogi"},
{q:["what is technology"], a:"technology tools aur machines ka use hai"},
{q:["tell computer fact"], a:"first computer ka naam eniac tha"},
{q:["tell ai fact"], a:"ai self learning systems bana sakta hai"},
{q:["tell coding fact"], a:"coding problem solving skill badhata hai"}

];
function conversation(ques){
    let con = false;
    for(let data of replies){
        for(let question of data.q){
            if(ques.includes(question)){
                speak(data.a);
                con = true;
                return;
            } 
        }
    }
    if(!con){
        speak("i do not understand, please, tell me again");
    }
}

// reload greet
let greet = false;
function reloadGreet(){
   if(!greet){
     speak("i am sara your ai friend, ready now!");
     greet = true;
   }
}

// transcript section convert voice to text
recognition.continuous = true;
recognition.interimResults = false;
recognition.onresult = function (event){
    console.log("working");
    let transcript = event.results[event.resultIndex][0].transcript;
    if(transcript.includes("open") || transcript.includes("close")){
        command(transcript.toLowerCase());
    } else {
        conversation(transcript.toLowerCase());
    }
    console.log(transcript);
}

// btn work and recognitize voice
let btn = document.querySelector(".start");
flag = 0;
btn.addEventListener("click",function(){
if(flag == 0){
    recognition.start();
    reloadGreet();
    btn.innerHTML = "Listening";
    flag = 1;
} else {
    recognition.stop();
    btn.innerHTML = "Start"
    flag = 0;
}
})







