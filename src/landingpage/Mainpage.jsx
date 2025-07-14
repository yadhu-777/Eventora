import Button from "./Eventbtn"
import Mainhead from "./hero"

import Eventtype from "./EventType"
import Leftevent from "./Leftevent"
import Rightevent from "./Rightevent"


export  default function Mainpage(){

    return(
       <>
       
    
         <Mainhead/>
         <Button/>
         <Eventtype/>
         <Leftevent  img="party.jpg"  des="Step into a world of lights, beats, and pure energy at Neon Nights, the ultimate party experience for those who love to live it loud! Held at one of the city’s most electrifying venues, this night promises dazzling light shows, top-tier DJs spinning non-stop hits, and an atmosphere that keeps you dancing till dawn. Dress in your brightest neon outfits, enjoy themed cocktails, and join the crowd on the LED-lit dance floor. With live performers, chill-out zones, and VIP areas, this is more than just a party—it’s a celebration of nightlife culture. Come for the music, stay for the memories."/>
         <Rightevent img="race.jpg"  des="Get ready for an adrenaline-fueled spectacle as the best bikers from across the country come together for the National Motorbike Grand Prix. Experience the raw power, unmatched speed, and high-octane action as professional riders battle it out on a challenging circuit filled with sharp bends, long straights, and heart-pounding overtakes. The event promises not only racing excitement but also live pit access, stunt shows, merchandise booths, and food stalls. Bring your friends and family to witness this ultimate test of skill, speed, and endurance. Whether you're a die-hard motorsports fan or just love the thrill of roaring engines, this event is your ticket to an unforgettable experience! "/>
         <Leftevent  img="sing.jpg"  des="Music lovers, get ready for an unforgettable night at Voices Live, a special concert event featuring live performances by top artists followed by an exclusive signing session. Feel the beat, sing along to your favorite songs, and then meet the stars in person! This hybrid concert-signing experience includes an electrifying live show, fan Q&A sessions, and personal interactions with the performers. Whether you’re attending for the music or to get your memorabilia signed, this event promises a personal and powerful connection with your favorite artists. Limited passes available for VIP meet & greet—don’t miss your chance to be a part of it! "/>
         <Rightevent img="ride.png"  des="Gear up for an eco-friendly and exhilarating ride at the Citywide Cycling Challenge! Join hundreds of cycling enthusiasts on a scenic journey through city streets, parks, and historic landmarks. Whether you're a seasoned cyclist or a beginner, the event features different race categories for all skill levels, including family rides, competitive sprints, and endurance challenges. With hydration stations, first-aid support, and cheering crowds along the way, it's a safe and spirited event promoting health, fitness, and environmental awareness. Plus, enjoy music, food trucks, cycling workshops, and a vibrant community of riders at the finish line celebration!"/>
          <Leftevent  img="birthday.jpg"  des="Celebrate life, laughter, and love at the Magical Birthday Bash! Whether it's a milestone celebration or a fun-filled kids’ party, this birthday event promises unforgettable moments for everyone. Featuring beautifully themed decorations, interactive games, balloon artists, delicious treats, and a jaw-dropping birthday cake, this event is crafted to create memories that last a lifetime. With special zones for kids, photo booths, and live entertainment, guests of all ages will have a blast. Don’t miss the highlight of the day—a magical surprise show to light up the birthday star’s face! Make this celebration truly magical—because every birthday deserves to be extraordinary "/>
         
        </>
        
    )
}