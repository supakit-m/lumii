//src\standAlone\mbti\quizData.js
export const mbtiQuizzes = [
  // --- E (Extrovert) vs I (Introvert) ---
  {
    id: 1,
    dimension: "EI",
    question: "เวลามีเรื่องน่าตื่นเต้นเกิดขึ้น \nคุณมักจะ...",
    image: "mbti/quizImage/quiz01.png",
    options: [
      { text: "อยากเล่าให้คนอื่นฟังทันที", value: "E" },
      { text: "เก็บมาคิดเงียบๆ คนเดียวก่อน", value: "I" }
    ]
  },
  {
    id: 2,
    dimension: "EI",
    question: "วันหยุดในฝันของคุณคือ...",
    image: "mbti/quizImage/quiz02.png",
    options: [
      { text: "ไปปาร์ตี้หรือทำกิจกรรมกับเพื่อน", value: "E" },
      { text: "พักผ่อนอ่านหนังสือที่บ้านเงียบๆ", value: "I" }
    ]
  },
  {
    id: 3,
    dimension: "EI",
    question: "หลังจากทำงานหนักมาทั้งวัน \nคุณชาร์จพลังด้วยการ...",
    image: "mbti/quizImage/quiz03.png",
    options: [
      { text: "ออกไปหาอะไรกินกับกลุ่มเพื่อน", value: "E" },
      { text: "นอนเล่นไถมือถืออยู่บนเตียง", value: "I" }
    ]
  },
  // --- N (Intuition) vs S (Sensing) ---
  {
    id: 4,
    dimension: "NS",
    question: "เวลาฟังคนอื่นเล่าเรื่อง \nคุณให้ความสำคัญกับ...",
    image: "mbti/quizImage/quiz04.png",
    options: [
      { text: "จินตนาการและความเป็นไปได้", value: "N" },
      { text: "รายละเอียดและข้อเท็จจริงที่เกิดขึ้น", value: "S" }
    ]
  },
  { 
    id: 5, 
    dimension: "NS", 
    question: "คุณมักจะจดจ่ออยู่กับ...", 
    image: "mbti/quizImage/quiz05.png",
    options: [
      { text: "ภาพรวมในอนาคต", value: "N" }, 
      { text: "สิ่งที่อยู่ตรงหน้าตอนนี้", value: "S" }
    ] 
  },
  { 
    id: 6, 
    dimension: "NS", 
    question: "คุณชอบวิธีการทำงานแบบ...", 
    image: "mbti/quizImage/quiz06.png",
    options: [
      { text: "คิดค้นวิธีใหม่ๆ ด้วยตัวเอง", value: "N" }, 
      { text: "ทำตามขั้นตอนที่เคยได้ผลมาแล้ว", value: "S" }
    ] 
  },
  // --- F (Feeling) vs T (Thinking) ---
  {
    id: 7,
    dimension: "FT",
    question: "เวลาเพื่อนมีปัญหา \nคุณจะ...",
    image: "mbti/quizImage/quiz07.png",
    options: [
      { text: "ปลอบโยนและซัพพอร์ตความรู้สึก", value: "F" },
      { text: "ช่วยวิเคราะห์หาทางแก้ปัญหาเป็นข้อๆ", value: "T" }
    ]
  },
  { 
    id: 8, 
    dimension: "FT", 
    question: "คุณตัดสินใจเรื่องสำคัญโดยใช้...", 
    image: "mbti/quizImage/quiz08.png",
    options: [
      { text: "ความรู้สึกและความเชื่อส่วนตัว", value: "F" }, 
      { text: "ตรรกะและเหตุผลที่เป็นกลาง", value: "T" }
    ] 
  },
  { 
    id: 9, 
    dimension: "FT", 
    question: "คำชมแบบไหนที่คุณประทับใจกว่า...", 
    image: "mbti/quizImage/quiz09.png",
    options: [
      { text: "คุณเป็นคนมีน้ำใจจัง", value: "F" }, 
      { text: "คุณทำงานเก่งและฉลาดมาก", value: "T" }
    ] 
  },
  // --- J (Judging) vs P (Perceiving) ---
  {
    id: 10,
    dimension: "JP",
    question: "ถ้าพรุ่งนี้มีทริปไปเที่ยว \nวันนี้คุณจะ...",
    image: "mbti/quizImage/quiz10.png",
    options: [
      { text: "จัดตารางเวลาและเตรียมของครบถ้วน", value: "J" },
      { text: "ไปลุ้นเอาดาบหน้า ตามใจหน้างาน", value: "P" }
    ]
  },
  { 
    id: 11, 
    dimension: "JP", 
    question: "โต๊ะทำงานของคุณมักจะ...", 
    image: "mbti/quizImage/quiz11.png",
    options: [
      { text: "เป็นระเบียบ แบ่งหมวดหมู่ชัดเจน", value: "J" }, 
      { text: "รกหน่อยๆ แต่คุณรู้ว่าอะไรอยู่ตรงไหน", value: "P" }
    ] 
  },
  { 
    id: 12, 
    dimension: "JP", 
    question: "เวลาทำงาน คุณมักจะ...", 
    image: "mbti/quizImage/quiz12.png",
    options: [
      { text: "ทำเสร็จก่อนเดดไลน์เสมอ", value: "J" }, 
      { text: "เริ่มไฟลนก้นตอนใกล้จะส่ง", value: "P" }
    ] 
  },
];