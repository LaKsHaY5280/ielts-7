// Cambridge 13 Academic Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 13 Academic Reading Test 2
 */
export const Cambridge13ARTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-9</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-9 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The Early History of Cinnamon</h4>
            <table className="border-collapse border border-gray-300 w-full">
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2 w-1/3">
                    <p className="font-bold">Biblical times:</p>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <p>
                      added to <strong>1.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      used to show <strong>2.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      between people
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Ancient Rome:</p>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <p>
                      used for its sweet smell at <strong>3.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <p className="font-bold">Middle Ages:</p>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <p>added to food, especially meat</p>
                    <p>
                      was an indication of a person's <strong>4.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      known as a treatment for <strong>5.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      and other health problems
                    </p>
                    <p>
                      grown in <strong>6.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      merchants used <strong>7.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      to bring it to the Mediterranean
                    </p>
                    <p>
                      arrived in the Mediterranean at <strong>8.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />
                    </p>
                    <p>
                      traders took it to <strong>9.</strong>{" "}
                      <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                      and sold it to destinations around Europe
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 10-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 10-13 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the information
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the
              information
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if there is no information on this
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> The Portuguese had control over the
                cinnamon trade in Ceylon throughout the 16th century.
              </p>
              <RadioGroup name="question10" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q10-true" value="TRUE" />
                  <Label htmlFor="q10-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-false" value="FALSE" />
                  <Label htmlFor="q10-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-ng" value="NOT GIVEN" />
                  <Label htmlFor="q10-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11.</strong> The Dutch took over the cinnamon trade from
                the Portuguese as soon as they arrived in Ceylon.
              </p>
              <RadioGroup name="question11" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q11-true" value="TRUE" />
                  <Label htmlFor="q11-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-false" value="FALSE" />
                  <Label htmlFor="q11-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-ng" value="NOT GIVEN" />
                  <Label htmlFor="q11-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12.</strong> The trees planted by the Dutch produced
                larger quantities of cinnamon than the wild trees.
              </p>
              <RadioGroup name="question12" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q12-true" value="TRUE" />
                  <Label htmlFor="q12-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-false" value="FALSE" />
                  <Label htmlFor="q12-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-ng" value="NOT GIVEN" />
                  <Label htmlFor="q12-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13.</strong> The spice trade maintained its economic
                importance during the 19th century.
              </p>
              <RadioGroup name="question13" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q13-true" value="TRUE" />
                  <Label htmlFor="q13-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-false" value="FALSE" />
                  <Label htmlFor="q13-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-ng" value="NOT GIVEN" />
                  <Label htmlFor="q13-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">
            Reading Passage 2 has six section, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 14-17 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> reference to research showing the
                beneficial effects of oxytocin on people
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q14-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q14-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q14-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> reasons why the effects of oxytocin are
                complex
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q15-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q15-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q15-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>16.</strong> mention of a period in which oxytocin
                attracted little scientific attention
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q16-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q16-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q16-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>17.</strong> reference to people ignoring certain
                aspects of their research data
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q17-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q17-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q17-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 18-20</h3>
          <p className="mb-2">
            Look at the following research findings (Questions{" "}
            <strong>18-20</strong>) and the list of researchers below.
          </p>
          <p className="mb-2">
            Match each research finding with the correct researcher,{" "}
            <strong>A-F</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes 18-20 on
            your answer sheet.
          </p>

          <div className="mb-4">
            <h4 className="font-bold">List of Researchers</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <strong>A</strong> Markus Heinrichs
              </div>
              <div>
                <strong>B</strong> Simone Shamay-Tsoory
              </div>
              <div>
                <strong>C</strong> Jennifer Bartz
              </div>
              <div>
                <strong>D</strong> Carolyn DeClerck
              </div>
              <div>
                <strong>E</strong> Carsten De Dreu
              </div>
              <div>
                <strong>F</strong> Sue Carter
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> People are more trusting when affected by
                oxytocin.
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q18-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q18-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q18-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>19.</strong> Oxytocin increases people's feelings of
                jealousy.
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q19-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q19-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q19-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>20.</strong> The effect of oxytocin varies from one type
                of person to another.
              </p>
              <RadioGroup name="question20" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q20-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q20-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q20-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 21-26 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Oxytocin research</h4>

            <p className="mb-4">
              The earliest findings about oxytocin and bonding came from
              research involving <strong>21.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> It was
              also discovered that humans produce oxytocin during{" "}
              <strong>22.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> An
              experiment in 2005, in which participants were given either
              oxytocin or a <strong>23.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />,
              reinforced the belief that the hormone had a positive effect.
              However, later research suggests that this is not always the case.
              A study at the University of Haifa where participants took part in
              a <strong>24.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> revealed
              the negative emotions which oxytocin can trigger. A study at the
              University of Antwerp showed people's lack of willingness to help{" "}
              <strong>25.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> while
              under the influence of oxytocin. Meanwhile, research at the
              University of Amsterdam revealed that people who have been given
              oxytocin consider <strong>26.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> that are
              familiar to them in their own country to have more positive
              associations than those from other cultures.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 27-31 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> In the first paragraph, the writer says
                that most managers
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A fail to spot the key consumer trends of the moment.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B make the mistake of focusing only on the principal
                    consumer trends.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C misinterpret market research data relating to current
                    consumer trends.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D are unaware of the significant impact that trends have on
                    consumers' lives.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> According to the third paragraph, Coach was
                anxious to
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A follow what some of its competitors were doing.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B maintain its prices throughout its range.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C safeguard its reputation as a manufacturer of luxury
                    goods.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D modify the entire look of its brand to suit the economic
                    climate.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> What point is made about Tesco's Greener
                Living programme?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A It did not require Tesco to modify its core business
                    activities.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B It succeeded in attracting a more eco-conscious clientele.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C Its main aim was to raise consumers' awareness of
                    environmental issues.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D It was not the first time that Tesco had implemented such
                    an initiative.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> What does the writer suggest about Nike's
                strategy?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A It was an extremely risky strategy at the time.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B It was a strategy that only a major company could afford
                    to follow.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C It was the type of strategy that would not have been
                    possible in the past.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D It was the kind of strategy which might appear to have few
                    obvious benefits.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> What was original about the ME2?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A It contained technology that had been developed for the
                    sports industry.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B It appealed to young people who were keen to improve their
                    physical fitness.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C It took advantage of a current trend for video games with
                    colorful 3D graphics.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D It was a handheld game that addressed people's concerns
                    about unhealthy lifestyles.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-37</h3>
          <p className="mb-2">
            Look at the following statements (Questions <strong>32-37</strong>)
            and the list of companies below.
          </p>
          <p className="mb-2">
            Match each statement with the correct company, <strong>A</strong>,{" "}
            <strong>B</strong>, <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>, in boxes 32-37 on your
            answer sheet.
          </p>

          <div className="mb-4">
            <h4 className="font-bold">List of companies</h4>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <strong>A</strong> Coach
              </div>
              <div>
                <strong>B</strong> Tesco
              </div>
              <div>
                <strong>C</strong> Nike
              </div>
              <div>
                <strong>D</strong> iToys
              </div>
            </div>
            <p>
              <strong>NB</strong> You may use any letter more than once.
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> It turned the notion that its products
                could have harmful effects to its own advantage.
              </p>
              <RadioGroup name="question32" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q32-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q32-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q32-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> It extended its offering by collaborating
                with another manufacturer.
              </p>
              <RadioGroup name="question33" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q33-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q33-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q33-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> It implemented an incentive scheme to
                demonstrate its corporate social responsibility.
              </p>
              <RadioGroup name="question34" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q34-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q34-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q34-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> It discovered that customers had a positive
                attitude towards dealing with difficult circumstances.
              </p>
              <RadioGroup name="question35" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q35-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q35-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q35-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> It responded to a growing lifestyle trend
                in an unrelated product sector.
              </p>
              <RadioGroup name="question36" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q36-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q36-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q36-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> It successfully avoided having to charge
                its customers less for its core products.
              </p>
              <RadioGroup name="question37" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q37-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q37-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q37-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 38-40</h3>
          <p className="mb-2">
            Complete each sentence with the correct ending, <strong>A</strong>,{" "}
            <strong>B</strong>, <strong>C</strong> or <strong>D</strong> below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>, in boxes 38-40 on your
            answer sheet.
          </p>

          <div className="mb-4">
            <div>
              <strong>A</strong> employ a combination of strategies to maintain
              your consumer base.
            </div>
            <div>
              <strong>B</strong> identify the most appropriate innovation
              strategy to use.
            </div>
            <div>
              <strong>C</strong> emphasise your brand's traditional values with
              the counteract-and-affirm strategy.
            </div>
            <div>
              <strong>D</strong> use the combine-and-transcend strategy to
              integrate the two worlds.
            </div>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> If there are any trend-related changes
                impacting on your category, you should
              </p>
              <RadioGroup name="question38" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q38-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q38-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q38-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> If a current trend highlights a negative
                aspect of your category, you should
              </p>
              <RadioGroup name="question39" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q39-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q39-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q39-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> If the consumers' new focus has an
                increasing lack of connection with your offering you should
              </p>
              <RadioGroup name="question40" className="flex gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q40-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q40-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q40-${letter.toLowerCase()}`}
                      className="ml-2"
                    >
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge13ARTest2Questions;
