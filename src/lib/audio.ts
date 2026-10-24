// Audio clips on the site. The files are in public/audio and are played by src/components/AudioPlayer.astro.

export const welcomeAudio = {
  src: "/audio/welcome-to-koh-russey.mp3",
  title: "Welcome to Koh Russey",
  /** As shown before it is played; the length of the file in seconds is 27. */
  duration: "0:27",
  seconds: 27,
  /** The spoken words, one list of lines for each verse. */
  transcript: [
    ["Somewhere off the coast of Cambodia,", "the sea touches a quiet shore."],
    ["Here, mornings unfold slowly.", "Light falls through the palms,", "and the breeze carries nothing you need to answer."],
    ["Walk a little.", "Stay a while.", "Let the day find its own rhythm."],
    ["Welcome to Koh Russey.", "There is time."],
  ],
};
