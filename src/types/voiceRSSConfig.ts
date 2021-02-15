import { Codec, Format, SpeechRate } from "./constants";

export const LanguagesAndSpeakers = {
  "ar-eg": ["Oda"] as const,
  "ar-sa": ["Salim"] as const,
  "bg-bg": ["Dimo"] as const,
  "ca-es": ["Rut"] as const,
  "zh-cn": ["Luli", "Shu", "Chow", "Wang"] as const,
  "zh-hk": ["Jia", "Xia", "Chen"] as const,
  "zh-tw": ["Akemi", "Lin", "Lee"] as const,
  "hr-hr": ["Nikola"] as const,
  "cs-cz": ["Josef"] as const,
  "da-dk": ["Freja"] as const,
  "nl-be": ["Daan"] as const,
  "nl-nl": ["Lotte", "Bram"] as const,
  "en-au": ["Zoe", "Isla", "Evie", "Jack"] as const,
  "en-ca": ["Rose", "Clara", "Emma", "Mason"] as const,
  "en-gb": ["Alice", "Nancy", "Lily", "Harry"] as const,
  "en-in": ["Eka", "Jai", "Ajit"] as const,
  "en-ie": ["Oran"] as const,
  "en-us": ["Linda", "Amy", "Mary", "John", "Mike"] as const,
  "fi-fi": ["Aada"] as const,
  "fr-ca": ["Emile", "Olivia", "Logan", "Felix"] as const,
  "fr-fr": ["Bette", "Iva", "Zola", "Axel"] as const,
  "fr-ch": ["Theo"] as const,
  "de-at": ["Lukas"] as const,
  "de-de": ["Hanna", "Lina", "Jonas"] as const,
  "de-ch": ["Tim"] as const,
  "el-gr": ["Neo"] as const,
  "he-il": ["Rami"] as const,
  "hi-in": ["Puja", "Kabir"] as const,
  "hu-hu": ["Mate"] as const,
  "id-id": ["Intan"] as const,
  "it-it": ["Bria", "Mia", "Pietro"] as const,
  "ja-jp": ["Hina", "Airi", "Fumi", "Akira"] as const,
  "ko-kr": ["Nari"] as const,
  "ms-my": ["Aqil"] as const,
  "nb-no": ["Marte", "Erik"] as const,
  "pl-pl": ["Julia", "Jan"] as const,
  "pt-br": ["Marcia", "Ligia", "Yara", "Dinis"] as const,
  "pt-pt": ["Leonor"] as const,
  "ro-ro": ["Doru"] as const,
  "ru-ru": ["Olga", "Marina", "Peter"] as const,
  "sk-sk": ["Beda"] as const,
  "sl-si": ["Vid"] as const,
  "es-mx": ["Juana", "Silvia", "Teresa", "Jose"] as const,
  "es-es": ["Camila", "Sofia", "Luna", "Diego"] as const,
  "sv-se": ["Molly", "Hugo"] as const,
  "ta-in": ["Sai"] as const,
  "th-th": ["Ukrit"] as const,
  "tr-tr": ["Omer"] as const,
} as const;

export type Config = {
  [K in keyof typeof LanguagesAndSpeakers]: {
    /** The language you want to get an audio recording in */
    language: K;
    /** The name of the speaker whose voice you want to use for the audio, depends on language used */
    speaker?: typeof LanguagesAndSpeakers[K][number];
    /** The API key you use for authenticating the requests */
    apiKey: string;
    /** The text you want to get an audio recording for */
    text: string;
    /** The audio codec you want to get the audio in */
    audioCodec?: typeof Codec[number];
    /** The audio format you want to get the audio in */
    audioFormat?: typeof Format[number];
    /** The speed at which you want the audio recording to be recorded at. Accepts values from -10 to 10 */
    speechRate?: typeof SpeechRate[number];
    /** Whether to use the
     * {@link https://docs.microsoft.com/en-us/cortana/skills/speech-synthesis-markup-language SSML} format */
    ssml?: boolean;
    /** Whether to output the audio content in Base64 text format */
    base64?: boolean;
  };
}[keyof typeof LanguagesAndSpeakers];
