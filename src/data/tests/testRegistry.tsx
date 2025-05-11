import { TestContent } from "@/lib/types";
import dynamic from "next/dynamic";

// Create a mapping of test IDs to dynamic import functions
export const TestRegistry: Record<string, () => Promise<TestContent>> = {
  // Cambridge 13 Academic Reading
  "cambridge13_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge13_ar_test1_passages"),
      import("./questions/cambridge13_ar_test1_questions"),
      import("./answers/cambridge13_ar_test1_answers")
    ]);
    
    const { Cambridge13ARTest1Passages } = passagesModule;
    const { Cambridge13ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge13ARTest1Passages />,
      questions: <Cambridge13ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge13_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge13_ar_test2_passages"),
      import("./questions/cambridge13_ar_test2_questions"),
      import("./answers/cambridge13_ar_test2_answers")
    ]);
    
    const { Cambridge13ARTest2Passages } = passagesModule;
    const { Cambridge13ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge13ARTest2Passages />,
      questions: <Cambridge13ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge13_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge13_ar_test3_passages"),
      import("./questions/cambridge13_ar_test3_questions"),
      import("./answers/cambridge13_ar_test3_answers")
    ]);
    
    const { Cambridge13ARTest3Passages } = passagesModule;
    const { Cambridge13ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge13ARTest3Passages />,
      questions: <Cambridge13ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge13_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge13_ar_test4_passages"),
      import("./questions/cambridge13_ar_test4_questions"),
      import("./answers/cambridge13_ar_test4_answers")
    ]);
    
    const { Cambridge13ARTest4Passages } = passagesModule;
    const { Cambridge13ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge13ARTest4Passages />,
      questions: <Cambridge13ARTest4Questions />,
      answers: answersModule.default
    };
  },
  
  // Cambridge 14 Academic Reading
  "cambridge14_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge14_ar_test1_passages"),
      import("./questions/cambridge14_ar_test1_questions"),
      import("./answers/cambridge14_ar_test1_answers")
    ]);
    
    const { Cambridge14ARTest1Passages } = passagesModule;
    const { Cambridge14ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge14ARTest1Passages />,
      questions: <Cambridge14ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge14_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge14_ar_test2_passages"),
      import("./questions/cambridge14_ar_test2_questions"),
      import("./answers/cambridge14_ar_test2_answers")
    ]);
    
    const { Cambridge14ARTest2Passages } = passagesModule;
    const { Cambridge14ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge14ARTest2Passages />,
      questions: <Cambridge14ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge14_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge14_ar_test3_passages"),
      import("./questions/cambridge14_ar_test3_questions"),
      import("./answers/cambridge14_ar_test3_answers")
    ]);
    
    const { Cambridge14ARTest3Passages } = passagesModule;
    const { Cambridge14ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge14ARTest3Passages />,
      questions: <Cambridge14ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge14_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge14_ar_test4_passages"),
      import("./questions/cambridge14_ar_test4_questions"),
      import("./answers/cambridge14_ar_test4_answers")
    ]);
    
    const { Cambridge14ARTest4Passages } = passagesModule;
    const { Cambridge14ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge14ARTest4Passages />,
      questions: <Cambridge14ARTest4Questions />,
      answers: answersModule.default
    };
  },
  
  // Cambridge 15 Academic Reading
  "cambridge15_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_ar_test1_passages"),
      import("./questions/cambridge15_ar_test1_questions"),
      import("./answers/cambridge15_ar_test1_answers")
    ]);
    
    const { Cambridge15ARTest1Passages } = passagesModule;
    const { Cambridge15ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge15ARTest1Passages />,
      questions: <Cambridge15ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_ar_test2_passages"),
      import("./questions/cambridge15_ar_test2_questions"),
      import("./answers/cambridge15_ar_test2_answers")
    ]);
    
    const { Cambridge15ARTest2Passages } = passagesModule;
    const { Cambridge15ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge15ARTest2Passages />,
      questions: <Cambridge15ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_ar_test3_passages"),
      import("./questions/cambridge15_ar_test3_questions"),
      import("./answers/cambridge15_ar_test3_answers")
    ]);
    
    const { Cambridge15ARTest3Passages } = passagesModule;
    const { Cambridge15ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge15ARTest3Passages />,
      questions: <Cambridge15ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_ar_test4_passages"),
      import("./questions/cambridge15_ar_test4_questions"),
      import("./answers/cambridge15_ar_test4_answers")
    ]);
    
    const { Cambridge15ARTest4Passages } = passagesModule;
    const { Cambridge15ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge15ARTest4Passages />,
      questions: <Cambridge15ARTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 15 General Reading
  "cambridge15_gr_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_gr_test1_passages"),
      import("./questions/cambridge15_gr_test1_questions"),
      import("./answers/cambridge15_gr_test1_answers")
    ]);
    
    const { Cambridge15GRTest1Passages } = passagesModule;
    const { Cambridge15GRTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge15GRTest1Passages />,
      questions: <Cambridge15GRTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_gr_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_gr_test2_passages"),
      import("./questions/cambridge15_gr_test2_questions"),
      import("./answers/cambridge15_gr_test2_answers")
    ]);
    
    const { Cambridge15GRTest2Passages } = passagesModule;
    const { Cambridge15GRTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge15GRTest2Passages />,
      questions: <Cambridge15GRTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_gr_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_gr_test3_passages"),
      import("./questions/cambridge15_gr_test3_questions"),
      import("./answers/cambridge15_gr_test3_answers")
    ]);
    
    const { Cambridge15GRTest3Passages } = passagesModule;
    const { Cambridge15GRTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge15GRTest3Passages />,
      questions: <Cambridge15GRTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge15_gr_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge15_gr_test4_passages"),
      import("./questions/cambridge15_gr_test4_questions"),
      import("./answers/cambridge15_gr_test4_answers")
    ]);
    
    const { Cambridge15GRTest4Passages } = passagesModule;
    const { Cambridge15GRTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge15GRTest4Passages />,
      questions: <Cambridge15GRTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 16 Academic Reading
  "cambridge16_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_ar_test1_passages"),
      import("./questions/cambridge16_ar_test1_questions"),
      import("./answers/cambridge16_ar_test1_answers")
    ]);
    
    const { Cambridge16ARTest1Passages } = passagesModule;
    const { Cambridge16ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge16ARTest1Passages />,
      questions: <Cambridge16ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_ar_test2_passages"),
      import("./questions/cambridge16_ar_test2_questions"),
      import("./answers/cambridge16_ar_test2_answers")
    ]);
    
    const { Cambridge16ARTest2Passages } = passagesModule;
    const { Cambridge16ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge16ARTest2Passages />,
      questions: <Cambridge16ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_ar_test3_passages"),
      import("./questions/cambridge16_ar_test3_questions"),
      import("./answers/cambridge16_ar_test3_answers")
    ]);
    
    const { Cambridge16ARTest3Passages } = passagesModule;
    const { Cambridge16ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge16ARTest3Passages />,
      questions: <Cambridge16ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_ar_test4_passages"),
      import("./questions/cambridge16_ar_test4_questions"),
      import("./answers/cambridge16_ar_test4_answers")
    ]);
    
    const { Cambridge16ARTest4Passages } = passagesModule;
    const { Cambridge16ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge16ARTest4Passages />,
      questions: <Cambridge16ARTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 16 General Reading
  "cambridge16_gr_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_gr_test1_passages"),
      import("./questions/cambridge16_gr_test1_questions"),
      import("./answers/cambridge16_gr_test1_answers")
    ]);
    
    const { Cambridge16GRTest1Passages } = passagesModule;
    const { Cambridge16GRTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge16GRTest1Passages />,
      questions: <Cambridge16GRTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_gr_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_gr_test2_passages"),
      import("./questions/cambridge16_gr_test2_questions"),
      import("./answers/cambridge16_gr_test2_answers")
    ]);
    
    const { Cambridge16GRTest2Passages } = passagesModule;
    const { Cambridge16GRTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge16GRTest2Passages />,
      questions: <Cambridge16GRTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_gr_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_gr_test3_passages"),
      import("./questions/cambridge16_gr_test3_questions"),
      import("./answers/cambridge16_gr_test3_answers")
    ]);
    
    const { Cambridge16GRTest3Passages } = passagesModule;
    const { Cambridge16GRTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge16GRTest3Passages />,
      questions: <Cambridge16GRTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge16_gr_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge16_gr_test4_passages"),
      import("./questions/cambridge16_gr_test4_questions"),
      import("./answers/cambridge16_gr_test4_answers")
    ]);
    
    const { Cambridge16GRTest4Passages } = passagesModule;
    const { Cambridge16GRTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge16GRTest4Passages />,
      questions: <Cambridge16GRTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 17 Academic Reading
  "cambridge17_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_ar_test1_passages"),
      import("./questions/cambridge17_ar_test1_questions"),
      import("./answers/cambridge17_ar_test1_answers")
    ]);
    
    const { Cambridge17ARTest1Passages } = passagesModule;
    const { Cambridge17ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge17ARTest1Passages />,
      questions: <Cambridge17ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_ar_test2_passages"),
      import("./questions/cambridge17_ar_test2_questions"),
      import("./answers/cambridge17_ar_test2_answers")
    ]);
    
    const { Cambridge17ARTest2Passages } = passagesModule;
    const { Cambridge17ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge17ARTest2Passages />,
      questions: <Cambridge17ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_ar_test3_passages"),
      import("./questions/cambridge17_ar_test3_questions"),
      import("./answers/cambridge17_ar_test3_answers")
    ]);
    
    const { Cambridge17ARTest3Passages } = passagesModule;
    const { Cambridge17ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge17ARTest3Passages />,
      questions: <Cambridge17ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_ar_test4_passages"),
      import("./questions/cambridge17_ar_test4_questions"),
      import("./answers/cambridge17_ar_test4_answers")
    ]);
    
    const { Cambridge17ARTest4Passages } = passagesModule;
    const { Cambridge17ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge17ARTest4Passages />,
      questions: <Cambridge17ARTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 17 General Reading
  "cambridge17_gr_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_gr_test1_passages"),
      import("./questions/cambridge17_gr_test1_questions"),
      import("./answers/cambridge17_gr_test1_answers")
    ]);
    
    const { Cambridge17GRTest1Passages } = passagesModule;
    const { Cambridge17GRTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge17GRTest1Passages />,
      questions: <Cambridge17GRTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_gr_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_gr_test2_passages"),
      import("./questions/cambridge17_gr_test2_questions"),
      import("./answers/cambridge17_gr_test2_answers")
    ]);
    
    const { Cambridge17GRTest2Passages } = passagesModule;
    const { Cambridge17GRTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge17GRTest2Passages />,
      questions: <Cambridge17GRTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_gr_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_gr_test3_passages"),
      import("./questions/cambridge17_gr_test3_questions"),
      import("./answers/cambridge17_gr_test3_answers")
    ]);
    
    const { Cambridge17GRTest3Passages } = passagesModule;
    const { Cambridge17GRTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge17GRTest3Passages />,
      questions: <Cambridge17GRTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge17_gr_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge17_gr_test4_passages"),
      import("./questions/cambridge17_gr_test4_questions"),
      import("./answers/cambridge17_gr_test4_answers")
    ]);
    
    const { Cambridge17GRTest4Passages } = passagesModule;
    const { Cambridge17GRTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge17GRTest4Passages />,
      questions: <Cambridge17GRTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 18 Academic Reading
  "cambridge18_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_ar_test1_passages"),
      import("./questions/cambridge18_ar_test1_questions"),
      import("./answers/cambridge18_ar_test1_answers")
    ]);
    
    const { Cambridge18ARTest1Passages } = passagesModule;
    const { Cambridge18ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge18ARTest1Passages />,
      questions: <Cambridge18ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_ar_test2_passages"),
      import("./questions/cambridge18_ar_test2_questions"),
      import("./answers/cambridge18_ar_test2_answers")
    ]);
    
    const { Cambridge18ARTest2Passages } = passagesModule;
    const { Cambridge18ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge18ARTest2Passages />,
      questions: <Cambridge18ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_ar_test3_passages"),
      import("./questions/cambridge18_ar_test3_questions"),
      import("./answers/cambridge18_ar_test3_answers")
    ]);
    
    const { Cambridge18ARTest3Passages } = passagesModule;
    const { Cambridge18ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge18ARTest3Passages />,
      questions: <Cambridge18ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_ar_test4_passages"),
      import("./questions/cambridge18_ar_test4_questions"),
      import("./answers/cambridge18_ar_test4_answers")
    ]);
    
    const { Cambridge18ARTest4Passages } = passagesModule;
    const { Cambridge18ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge18ARTest4Passages />,
      questions: <Cambridge18ARTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 18 General Reading
  "cambridge18_gr_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_gr_test1_passages"),
      import("./questions/cambridge18_gr_test1_questions"),
      import("./answers/cambridge18_gr_test1_answers")
    ]);
    
    const { Cambridge18GRTest1Passages } = passagesModule;
    const { Cambridge18GRTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge18GRTest1Passages />,
      questions: <Cambridge18GRTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_gr_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_gr_test2_passages"),
      import("./questions/cambridge18_gr_test2_questions"),
      import("./answers/cambridge18_gr_test2_answers")
    ]);
    
    const { Cambridge18GRTest2Passages } = passagesModule;
    const { Cambridge18GRTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge18GRTest2Passages />,
      questions: <Cambridge18GRTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_gr_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_gr_test3_passages"),
      import("./questions/cambridge18_gr_test3_questions"),
      import("./answers/cambridge18_gr_test3_answers")
    ]);
    
    const { Cambridge18GRTest3Passages } = passagesModule;
    const { Cambridge18GRTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge18GRTest3Passages />,
      questions: <Cambridge18GRTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge18_gr_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge18_gr_test4_passages"),
      import("./questions/cambridge18_gr_test4_questions"),
      import("./answers/cambridge18_gr_test4_answers")
    ]);
    
    const { Cambridge18GRTest4Passages } = passagesModule;
    const { Cambridge18GRTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge18GRTest4Passages />,
      questions: <Cambridge18GRTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 19 Academic Reading
  "cambridge19_ar_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_ar_test1_passages"),
      import("./questions/cambridge19_ar_test1_questions"),
      import("./answers/cambridge19_ar_test1_answers")
    ]);
    
    const { Cambridge19ARTest1Passages } = passagesModule;
    const { Cambridge19ARTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge19ARTest1Passages />,
      questions: <Cambridge19ARTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_ar_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_ar_test2_passages"),
      import("./questions/cambridge19_ar_test2_questions"),
      import("./answers/cambridge19_ar_test2_answers")
    ]);
    
    const { Cambridge19ARTest2Passages } = passagesModule;
    const { Cambridge19ARTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge19ARTest2Passages />,
      questions: <Cambridge19ARTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_ar_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_ar_test3_passages"),
      import("./questions/cambridge19_ar_test3_questions"),
      import("./answers/cambridge19_ar_test3_answers")
    ]);
    
    const { Cambridge19ARTest3Passages } = passagesModule;
    const { Cambridge19ARTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge19ARTest3Passages />,
      questions: <Cambridge19ARTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_ar_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_ar_test4_passages"),
      import("./questions/cambridge19_ar_test4_questions"),
      import("./answers/cambridge19_ar_test4_answers")
    ]);
    
    const { Cambridge19ARTest4Passages } = passagesModule;
    const { Cambridge19ARTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge19ARTest4Passages />,
      questions: <Cambridge19ARTest4Questions />,
      answers: answersModule.default
    };
  },

  // Cambridge 19 General Reading
  "cambridge19_gr_test1": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_gr_test1_passages"),
      import("./questions/cambridge19_gr_test1_questions"),
      import("./answers/cambridge19_gr_test1_answers")
    ]);
    
    const { Cambridge19GRTest1Passages } = passagesModule;
    const { Cambridge19GRTest1Questions } = questionsModule;
    
    return {
      passages: <Cambridge19GRTest1Passages />,
      questions: <Cambridge19GRTest1Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_gr_test2": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_gr_test2_passages"),
      import("./questions/cambridge19_gr_test2_questions"),
      import("./answers/cambridge19_gr_test2_answers")
    ]);
    
    const { Cambridge19GRTest2Passages } = passagesModule;
    const { Cambridge19GRTest2Questions } = questionsModule;
    
    return {
      passages: <Cambridge19GRTest2Passages />,
      questions: <Cambridge19GRTest2Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_gr_test3": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_gr_test3_passages"),
      import("./questions/cambridge19_gr_test3_questions"),
      import("./answers/cambridge19_gr_test3_answers")
    ]);
    
    const { Cambridge19GRTest3Passages } = passagesModule;
    const { Cambridge19GRTest3Questions } = questionsModule;
    
    return {
      passages: <Cambridge19GRTest3Passages />,
      questions: <Cambridge19GRTest3Questions />,
      answers: answersModule.default
    };
  },
  
  "cambridge19_gr_test4": async () => {
    const [passagesModule, questionsModule, answersModule] = await Promise.all([
      import("./passages/cambridge19_gr_test4_passages"),
      import("./questions/cambridge19_gr_test4_questions"),
      import("./answers/cambridge19_gr_test4_answers")
    ]);
    
    const { Cambridge19GRTest4Passages } = passagesModule;
    const { Cambridge19GRTest4Questions } = questionsModule;
    
    return {
      passages: <Cambridge19GRTest4Passages />,
      questions: <Cambridge19GRTest4Questions />,
      answers: answersModule.default
    };
  }
};

// Test metadata without the heavy components - for listing purposes
export const TestMetadata = {
  "cambridge13_ar_test1": {
    title: "Cambridge 13 Academic Reading Test 1",
    type: "academic_reading",
    book: 13,
    testNumber: 1
  },
  "cambridge13_ar_test2": {
    title: "Cambridge 13 Academic Reading Test 2",
    type: "academic_reading",
    book: 13,
    testNumber: 2
  },
  "cambridge13_ar_test3": {
    title: "Cambridge 13 Academic Reading Test 3",
    type: "academic_reading",
    book: 13,
    testNumber: 3
  },
  "cambridge13_ar_test4": {
    title: "Cambridge 13 Academic Reading Test 4",
    type: "academic_reading",
    book: 13,
    testNumber: 4
  },
  "cambridge14_ar_test1": {
    title: "Cambridge 14 Academic Reading Test 1",
    type: "academic_reading",
    book: 14,
    testNumber: 1
  },
  "cambridge14_ar_test2": {
    title: "Cambridge 14 Academic Reading Test 2",
    type: "academic_reading",
    book: 14,
    testNumber: 2
  },
  "cambridge14_ar_test3": {
    title: "Cambridge 14 Academic Reading Test 3",
    type: "academic_reading",
    book: 14,
    testNumber: 3
  },
  "cambridge14_ar_test4": {
    title: "Cambridge 14 Academic Reading Test 4",
    type: "academic_reading",
    book: 14,
    testNumber: 4
  },
  "cambridge15_ar_test1": {
    title: "Cambridge 15 Academic Reading Test 1",
    type: "academic_reading",
    book: 15,
    testNumber: 1
  },
  "cambridge15_ar_test2": {
    title: "Cambridge 15 Academic Reading Test 2",
    type: "academic_reading",
    book: 15,
    testNumber: 2
  },
  "cambridge15_ar_test3": {
    title: "Cambridge 15 Academic Reading Test 3",
    type: "academic_reading",
    book: 15,
    testNumber: 3
  },
  "cambridge15_ar_test4": {
    title: "Cambridge 15 Academic Reading Test 4",
    type: "academic_reading",
    book: 15,
    testNumber: 4
  },
  "cambridge15_gr_test1": {
    title: "Cambridge 15 General Reading Test 1",
    type: "general_reading",
    book: 15,
    testNumber: 1
  },
  "cambridge15_gr_test2": {
    title: "Cambridge 15 General Reading Test 2",
    type: "general_reading",
    book: 15,
    testNumber: 2
  },
  "cambridge15_gr_test3": {
    title: "Cambridge 15 General Reading Test 3",
    type: "general_reading",
    book: 15,
    testNumber: 3
  },
  "cambridge15_gr_test4": {
    title: "Cambridge 15 General Reading Test 4",
    type: "general_reading",
    book: 15,
    testNumber: 4
  },
  "cambridge16_ar_test1": {
    title: "Cambridge 16 Academic Reading Test 1",
    type: "academic_reading",
    book: 16,
    testNumber: 1
  },
  "cambridge16_ar_test2": {
    title: "Cambridge 16 Academic Reading Test 2",
    type: "academic_reading",
    book: 16,
    testNumber: 2
  },
  "cambridge16_ar_test3": {
    title: "Cambridge 16 Academic Reading Test 3",
    type: "academic_reading",
    book: 16,
    testNumber: 3
  },
  "cambridge16_ar_test4": {
    title: "Cambridge 16 Academic Reading Test 4",
    type: "academic_reading",
    book: 16,
    testNumber: 4
  },
  "cambridge16_gr_test1": {
    title: "Cambridge 16 General Reading Test 1",
    type: "general_reading",
    book: 16,
    testNumber: 1
  },
  "cambridge16_gr_test2": {
    title: "Cambridge 16 General Reading Test 2",
    type: "general_reading",
    book: 16,
    testNumber: 2
  },
  "cambridge16_gr_test3": {
    title: "Cambridge 16 General Reading Test 3",
    type: "general_reading",
    book: 16,
    testNumber: 3
  },
  "cambridge16_gr_test4": {
    title: "Cambridge 16 General Reading Test 4",
    type: "general_reading",
    book: 16,
    testNumber: 4
  },
  "cambridge17_ar_test1": {
    title: "Cambridge 17 Academic Reading Test 1",
    type: "academic_reading",
    book: 17,
    testNumber: 1
  },
  "cambridge17_ar_test2": {
    title: "Cambridge 17 Academic Reading Test 2",
    type: "academic_reading",
    book: 17,
    testNumber: 2
  },
  "cambridge17_ar_test3": {
    title: "Cambridge 17 Academic Reading Test 3",
    type: "academic_reading",
    book: 17,
    testNumber: 3
  },
  "cambridge17_ar_test4": {
    title: "Cambridge 17 Academic Reading Test 4",
    type: "academic_reading",
    book: 17,
    testNumber: 4
  },
  "cambridge17_gr_test1": {
    title: "Cambridge 17 General Reading Test 1",
    type: "general_reading",
    book: 17,
    testNumber: 1
  },
  "cambridge17_gr_test2": {
    title: "Cambridge 17 General Reading Test 2",
    type: "general_reading",
    book: 17,
    testNumber: 2
  },
  "cambridge17_gr_test3": {
    title: "Cambridge 17 General Reading Test 3",
    type: "general_reading",
    book: 17,
    testNumber: 3
  },
  "cambridge17_gr_test4": {
    title: "Cambridge 17 General Reading Test 4",
    type: "general_reading",
    book: 17,
    testNumber: 4
  },
  "cambridge18_ar_test1": {
    title: "Cambridge 18 Academic Reading Test 1",
    type: "academic_reading",
    book: 18,
    testNumber: 1
  },
  "cambridge18_ar_test2": {
    title: "Cambridge 18 Academic Reading Test 2",
    type: "academic_reading",
    book: 18,
    testNumber: 2
  },
  "cambridge18_ar_test3": {
    title: "Cambridge 18 Academic Reading Test 3",
    type: "academic_reading",
    book: 18,
    testNumber: 3
  },
  "cambridge18_ar_test4": {
    title: "Cambridge 18 Academic Reading Test 4",
    type: "academic_reading",
    book: 18,
    testNumber: 4
  },
  "cambridge18_gr_test1": {
    title: "Cambridge 18 General Reading Test 1",
    type: "general_reading",
    book: 18,
    testNumber: 1
  },
  "cambridge18_gr_test2": {
    title: "Cambridge 18 General Reading Test 2",
    type: "general_reading",
    book: 18,
    testNumber: 2
  },
  "cambridge18_gr_test3": {
    title: "Cambridge 18 General Reading Test 3",
    type: "general_reading",
    book: 18,
    testNumber: 3
  },
  "cambridge18_gr_test4": {
    title: "Cambridge 18 General Reading Test 4",
    type: "general_reading",
    book: 18,
    testNumber: 4
  },
  "cambridge19_ar_test1": {
    title: "Cambridge 19 Academic Reading Test 1",
    type: "academic_reading",
    book: 19,
    testNumber: 1
  },
  "cambridge19_ar_test2": {
    title: "Cambridge 19 Academic Reading Test 2",
    type: "academic_reading",
    book: 19,
    testNumber: 2
  },
  "cambridge19_ar_test3": {
    title: "Cambridge 19 Academic Reading Test 3",
    type: "academic_reading",
    book: 19,
    testNumber: 3
  },
  "cambridge19_ar_test4": {
    title: "Cambridge 19 Academic Reading Test 4",
    type: "academic_reading",
    book: 19,
    testNumber: 4
  },
  "cambridge19_gr_test1": {
    title: "Cambridge 19 General Reading Test 1",
    type: "general_reading",
    book: 19,
    testNumber: 1
  },
  "cambridge19_gr_test2": {
    title: "Cambridge 19 General Reading Test 2",
    type: "general_reading",
    book: 19,
    testNumber: 2
  },
  "cambridge19_gr_test3": {
    title: "Cambridge 19 General Reading Test 3",
    type: "general_reading",
    book: 19,
    testNumber: 3
  },
  "cambridge19_gr_test4": {
    title: "Cambridge 19 General Reading Test 4",
    type: "general_reading",
    book: 19,
    testNumber: 4
  },
  // Add metadata for all other tests
};

// In-memory cache for loaded tests to prevent reloading
const testCache: Record<string, Promise<TestContent>> = {};

// Function to get a test by ID with caching
export async function getTestById(id: string): Promise<TestContent> {
  if (!TestRegistry[id]) {
    throw new Error(`Test with id ${id} not found in the registry`);
  }
  
  // Use cached version if available
  if (!testCache[id]) {
    testCache[id] = TestRegistry[id]();
  }
  
  return testCache[id];
}

// Function to get all test metadata (without loading components)
export function getAllTestMetadata() {
  return TestMetadata;
}

// Function to get filtered test metadata by type
export function getFilteredTestMetadata(type: string) {
  return Object.entries(TestMetadata)
    .filter(([_, meta]) => meta.type === type)
    .reduce((acc, [id, meta]) => {
      acc[id] = meta;
      return acc;
    }, {} as Record<string, typeof TestMetadata[keyof typeof TestMetadata]>);
}
