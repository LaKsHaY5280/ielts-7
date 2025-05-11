// Cambridge 15 Academic Reading Test 1 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 15 Academic Reading Test 1
 */
export const Cambridge15ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-4</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 1-4</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The nutmeg tree and fruit</h4>

            <p className="mb-2">
              – the leaves of the tree are <strong>1.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in shape
            </p>
            <p className="mb-2">
              – the <strong>2.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> surrounds
              the fruit and breaks open when the fruit is ripe
            </p>
            <p className="mb-2">
              – the <strong>3.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is used
              to produce the spice nutmeg
            </p>
            <p className="mb-2">
              – the covering known as the aril is used to produce{" "}
              <strong>4.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">– the tree has yellow flowers and fruit</p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 5-7</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">
            In <strong>boxes 5-7</strong> on your answer sheet, write
          </p>
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
                <strong>5.</strong> In the Middle Ages, most Europeans knew
                where nutmeg was grown.
              </p>
              <RadioGroup name="question5" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q5-true" value="TRUE" />
                  <Label htmlFor="q5-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-false" value="FALSE" />
                  <Label htmlFor="q5-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-ng" value="NOT GIVEN" />
                  <Label htmlFor="q5-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6.</strong> The VOC was the world's first major trading
                company.
              </p>
              <RadioGroup name="question6" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q6-true" value="TRUE" />
                  <Label htmlFor="q6-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-false" value="FALSE" />
                  <Label htmlFor="q6-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-ng" value="NOT GIVEN" />
                  <Label htmlFor="q6-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>7.</strong> Following the Treaty of Breda, the Dutch had
                control of all the islands where nutmeg grew.
              </p>
              <RadioGroup name="question7" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q7-true" value="TRUE" />
                  <Label htmlFor="q7-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-false" value="FALSE" />
                  <Label htmlFor="q7-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-ng" value="NOT GIVEN" />
                  <Label htmlFor="q7-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 8-13</strong> on your answer
            sheet.
          </p>

          <table className="border-collapse border w-full mb-4">
            <tbody>
              <tr className="border">
                <td className="border p-2 w-1/4">
                  <p>Middle Ages</p>
                </td>
                <td className="border p-2 w-3/4">
                  <p>
                    Nutmeg was brought to Europe by the <strong>8.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </p>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-2">
                  <p>16th century</p>
                </td>
                <td className="border p-2">
                  <p>European nations took control of the nutmeg trade</p>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-2">
                  <p>17th century</p>
                </td>
                <td className="border p-2">
                  <p>
                    Demand for nutmeg grew, as it was believed to be effective
                    against the disease known as the <strong>9.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </p>
                  <p>The Dutch</p>
                  <p>– took control of the Banda Islands</p>
                  <p>– restricted nutmeg production to a few areas</p>
                  <p>
                    – put <strong>10.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" /> on
                    nutmeg to avoid it being cultivated outside the islands
                  </p>
                  <p>
                    – finally obtained the island of <strong>11.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                    from the British
                  </p>
                </td>
              </tr>
              <tr className="border">
                <td className="border p-2">
                  <p>Late 18th century</p>
                </td>
                <td className="border p-2">
                  <p>
                    1770 – nutmeg plants were secretly taken to{" "}
                    <strong>12.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </p>
                  <p>
                    1778 – half the Banda Islands' nutmeg plantations were
                    destroyed by a <strong>13.</strong>{" "}
                    <Input type="text" className="w-32 mx-1 inline-block" />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes{" "}
            <strong>14-18</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> reference to the amount of time when a car
                is not in use
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q14-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q14-${letter}`} value={letter} />
                    <Label htmlFor={`q14-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> mention of several advantages of driverless
                vehicles for individual road-users
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q15-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q15-${letter}`} value={letter} />
                    <Label htmlFor={`q15-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>16.</strong> reference to the opportunity of choosing
                the most appropriate vehicle for each trip
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q16-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q16-${letter}`} value={letter} />
                    <Label htmlFor={`q16-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>17.</strong> an estimate of how long it will take to
                overcome a number of problems
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q17-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q17-${letter}`} value={letter} />
                    <Label htmlFor={`q17-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> a suggestion that the use of driverless
                cars may have no effect on the number of vehicles manufactured
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q18-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q18-${letter}`} value={letter} />
                    <Label htmlFor={`q18-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 19-22</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 19-22</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The impact of driverless cars</h4>

            <p className="mb-4">
              Figures from the Transport Research Laboratory indicate that most
              motor accidents are partly due to <strong>19.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, so the
              introduction of driverless vehicles will result in greater safety.
              In addition to the direct benefits of automation, it may bring
              other advantages. For example, schemes for <strong>20.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> will be
              more workable, especially in towns and cities, resulting in fewer
              cars on the road. According to the University of Michigan
              Transportation Research Institute, there could be a 43 percent
              drop in <strong>21.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of cars.
              However, this would mean that the yearly <strong>22.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of each
              car would, on average, be twice as high as it currently is. this
              would lead to a higher turnover of vehicles, and therefore no
              reduction in automotive manufacturing.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23 and 24</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </p>
          <p className="mb-4">
            Write the correct letters in <strong>boxes 23 and 24</strong> on
            your answer sheet.
          </p>

          <p className="mb-4">
            <strong>
              Which TWO benefits of automated vehicles does the writer mention?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q23-24-a" value="A" />
              <Label htmlFor="q23-24-a" className="ml-2">
                A Car travellers could enjoy considerable cost savings.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-b" value="B" />
              <Label htmlFor="q23-24-b" className="ml-2">
                B It would be easier to find parking spaces in urban areas
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-c" value="C" />
              <Label htmlFor="q23-24-c" className="ml-2">
                C Travellers could spend journeys doing something other than
                driving.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-d" value="D" />
              <Label htmlFor="q23-24-d" className="ml-2">
                D People who find driving physically difficult could travel
                independently.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-e" value="E" />
              <Label htmlFor="q23-24-e" className="ml-2">
                E A reduction in the number of cars would mean a reduction in
                pollution.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 25 and 26</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </p>
          <p className="mb-4">
            Write the correct letters in <strong>boxes 25 and 26</strong> on
            your answer sheet.
          </p>

          <p className="mb-4">
            <strong>
              Which TWO challenges to automated vehicle development does the
              writer mention?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q25-26-a" value="A" />
              <Label htmlFor="q25-26-a" className="ml-2">
                A making sure the general public has confidence in automated
                vehicles
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-b" value="B" />
              <Label htmlFor="q25-26-b" className="ml-2">
                B managing the pace of transition from conventional to automated
                vehicles
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-c" value="C" />
              <Label htmlFor="q25-26-c" className="ml-2">
                C deciding how to compensate professional drivers who become
                redundant
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-d" value="D" />
              <Label htmlFor="q25-26-d" className="ml-2">
                D setting up the infrastructure to make roads suitable for
                automated vehicles
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-e" value="E" />
              <Label htmlFor="q25-26-e" className="ml-2">
                E getting automated vehicles to adapt to various different
                driving conditions
              </Label>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-32</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in <strong>boxes 27-32</strong> on your
            answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> The writer refers to visitors to New York
                to illustrate the point that
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A exploration is an intrinsic element of being human.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B most people are enthusiastic about exploring.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C exploration can lead to surprising results.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D most people find exploration daunting.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> According to the second paragraph, what is
                the writer's view of explorers?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A Their discoveries have brought both benefits and
                    disadvantages.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B Their main value is in teaching others.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C They act on an urge that is common to everyone.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D They tend to be more attracted to certain professions than
                    to others.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> The writer refers to a description of Egdon
                Heath to suggest that
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A Hardy was writing about his own experience of exploration.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B Hardy was mistaken about the nature of exploration.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C Hardy's aim was to investigate people's emotional states.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D Hardy's aim was to show the attraction of isolation.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> In the fourth paragraph, the writer refers
                to 'a golden age' to suggest that
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A the amount of useful information produced by exploration
                    has decreased.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B fewer people are interested in exploring than in the 19th
                    century.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C recent developments have made exploration less exciting.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D we are wrong to think that exploration is no longer
                    necessary.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> In the sixth paragraph, when discussing the
                definition of exploration, the writer argues that
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A people tend to relate exploration to their own
                    professional interests.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B certain people are likely to misunderstand the nature of
                    exploration.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C the generally accepted definition has changed over time.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D historians and scientists have more valid definitions than
                    the general public.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> In the last paragraph, the writer explains
                that he is interested in
              </p>
              <RadioGroup name="question32" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-a" value="A" />
                  <Label htmlFor="q32-a" className="ml-2">
                    A how someone's personality is reflected in their choice of
                    places to visit.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-b" value="B" />
                  <Label htmlFor="q32-b" className="ml-2">
                    B the human ability to cast new light on places that may be
                    familiar.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-c" value="C" />
                  <Label htmlFor="q32-c" className="ml-2">
                    C how travel writing has evolved to meet changing demands.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-d" value="D" />
                  <Label htmlFor="q32-d" className="ml-2">
                    D the feelings that writers develop about the places that
                    they explore.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 33-37</h3>
          <p className="mb-2">
            Look at the following statements (Questions 33-37) and the list of
            explorers below.
          </p>
          <p className="mb-2">
            Match each statement with the correct explorer, <strong>A-E</strong>
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A-E</strong>, in boxes{" "}
            <strong>33-37</strong> on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of Explorers</h4>
            <p className="mb-1">
              <strong>A</strong> Peter Fleming
            </p>
            <p className="mb-1">
              <strong>B</strong> Ran Fiennes
            </p>
            <p className="mb-1">
              <strong>C</strong> Chris Bonington
            </p>
            <p className="mb-1">
              <strong>D</strong> Robin Hanbury-Tenison
            </p>
            <p className="mb-1">
              <strong>E</strong> Wilfred Thesiger
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> He referred to the relevance of the form of
                transport used.
              </p>
              <RadioGroup name="question33" className="flex gap-8">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q33-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q33-${letter}`} value={letter} />
                    <Label htmlFor={`q33-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> He described feelings on coming back home
                after a long journey.
              </p>
              <RadioGroup name="question34" className="flex gap-8">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q34-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q34-${letter}`} value={letter} />
                    <Label htmlFor={`q34-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> He worked for the benefit of specific
                groups of people.
              </p>
              <RadioGroup name="question35" className="flex gap-8">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q35-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q35-${letter}`} value={letter} />
                    <Label htmlFor={`q35-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> He did not consider learning about oneself
                an essential part of exploration.
              </p>
              <RadioGroup name="question36" className="flex gap-8">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q36-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q36-${letter}`} value={letter} />
                    <Label htmlFor={`q36-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> He defined exploration as being both unique
                and of value to others.
              </p>
              <RadioGroup name="question37" className="flex gap-8">
                {["A", "B", "C", "D", "E"].map((letter) => (
                  <div key={`q37-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q37-${letter}`} value={letter} />
                    <Label htmlFor={`q37-${letter}`} className="ml-2">
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
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 38-40</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The writer's own bias</h4>

            <p className="mb-4">
              The writer has experience of a large number of{" "}
              <strong>38.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, and was
              the first stranger that certain previously <strong>39.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> people
              had encountered. He believes there is no need for further
              exploration of Earth's <strong>40.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, except
              to answer specific questions such as how buffalo eat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge15ARTest1Questions;
