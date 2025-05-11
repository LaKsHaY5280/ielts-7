// Cambridge 15 Academic Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 Academic Reading Test 4
 */
const Cambridge15ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-5</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-5 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              The importance of the huarango tree
            </h4>
            <p className="mb-2">
              – its roots can extend as far as 80 metres into the soil
            </p>
            <p className="mb-2">
              – can access <strong>1</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> deep
              below the surface
            </p>
            <p className="mb-2">
              – was a crucial part of local inhabitants' <strong>2</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> a long
              time ago
            </p>
            <p className="mb-2">
              – helped people to survive periods of <strong>3</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – prevents <strong>4</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of the
              soil
            </p>
            <p className="mb-2">
              – prevents land from becoming a <strong>5</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 6-8</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 6-8 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Traditional uses of the huarango tree
            </h4>
            <table className="border-collapse border border-gray-300 w-full">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2 w-1/2">
                    Part of tree
                  </th>
                  <th className="border border-gray-300 p-2 w-1/2">
                    Traditional use
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>6</strong> <Input type="text" className="w-full" />
                  </td>
                  <td className="border border-gray-300 p-2">Fuel</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>7</strong> <Input type="text" className="w-full" />
                  </td>
                  <td className="border border-gray-300 p-2">Medicine</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-2">
                    <strong>8</strong> <Input type="text" className="w-full" />
                  </td>
                  <td className="border border-gray-300 p-2">Construction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 9-13 on your answer sheet, write</p>
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
                <strong>9.</strong> Local families have told Whaley about some
                traditional uses of huarango products.
              </p>
              <RadioGroup name="question9" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q9-true" value="TRUE" />
                  <Label htmlFor="q9-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-false" value="FALSE" />
                  <Label htmlFor="q9-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-ng" value="NOT GIVEN" />
                  <Label htmlFor="q9-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> Farmer Alberto Benevides is now making a
                good profit from growing huarangos.
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
                <strong>11.</strong> Whaley needs the co-operation of farmers to
                help preserve the area's wildlife.
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
                <strong>12.</strong> For Whaley's project to succeed, it needs
                to be extended over a very large area.
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
                <strong>13.</strong> Whaley has plans to go to Africa to set up
                a similar project.
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
          <h3 className="font-bold mb-2">Questions 14-19</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 2?
          </p>
          <p className="mb-2">In boxes 14-19 on your answer sheet, write</p>
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
                <strong>14.</strong> La Gomera is the most mountainous of all
                the Canary Islands.
              </p>
              <RadioGroup name="question14" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q14-true" value="TRUE" />
                  <Label htmlFor="q14-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-false" value="FALSE" />
                  <Label htmlFor="q14-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q14-ng" value="NOT GIVEN" />
                  <Label htmlFor="q14-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>15.</strong> Silbo is only appropriate for short and
                simple messages.
              </p>
              <RadioGroup name="question15" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q15-true" value="TRUE" />
                  <Label htmlFor="q15-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q15-false" value="FALSE" />
                  <Label htmlFor="q15-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q15-ng" value="NOT GIVEN" />
                  <Label htmlFor="q15-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>16.</strong> In the brain-activity study, silbadores and
                non-whistlers produced different results.
              </p>
              <RadioGroup name="question16" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q16-true" value="TRUE" />
                  <Label htmlFor="q16-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q16-false" value="FALSE" />
                  <Label htmlFor="q16-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q16-ng" value="NOT GIVEN" />
                  <Label htmlFor="q16-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>17.</strong> The Spanish introduced Silbo to the islands
                in the 15th century.
              </p>
              <RadioGroup name="question17" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q17-true" value="TRUE" />
                  <Label htmlFor="q17-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q17-false" value="FALSE" />
                  <Label htmlFor="q17-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q17-ng" value="NOT GIVEN" />
                  <Label htmlFor="q17-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> There is precise data available regarding
                all of the whistle languages in existence today.
              </p>
              <RadioGroup name="question18" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q18-true" value="TRUE" />
                  <Label htmlFor="q18-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q18-false" value="FALSE" />
                  <Label htmlFor="q18-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q18-ng" value="NOT GIVEN" />
                  <Label htmlFor="q18-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>19.</strong> The children of Gomera now learn Silbo.
              </p>
              <RadioGroup name="question19" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q19-true" value="TRUE" />
                  <Label htmlFor="q19-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q19-false" value="FALSE" />
                  <Label htmlFor="q19-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q19-ng" value="NOT GIVEN" />
                  <Label htmlFor="q19-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 20-26</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 20-26 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Silbo Gomero</h4>
            <h5 className="font-semibold mb-1">How Silbo is produced</h5>
            <p className="mb-2">
              – high- and low-frequency tones represent different sounds in
              Spanish <strong>20</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – pitch of whistle is controlled using silbador's{" "}
              <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – <strong>22</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is
              changed with a cupped hand
            </p>

            <h5 className="font-semibold mb-1 mt-4">How Silbo is used</h5>
            <p className="mb-2">
              – has long been used by shepherds and people living in secluded
              locations
            </p>
            <p className="mb-2">
              – in everyday use for the transmission of brief{" "}
              <strong>23</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – can relay essential information quickly, e.g. to inform people
              about <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>

            <h5 className="font-semibold mb-1 mt-4">The future of Silbo</h5>
            <p className="mb-2">
              – future under threat because of new <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – Canaries' authorities hoping to receive a UNESCO{" "}
              <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to help
              preserve it
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Complete the summary using the list of words, <strong>A-J</strong>,
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-J</strong>, in boxes 27-31 on
            your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Big businesses</h4>
            <p className="mb-4">
              Many big businesses today are prepared to harm people and the
              environment in order to make money, and they appear to have no{" "}
              <strong>27</strong>{" "}
              <Input type="text" className="w-20 mx-1 inline-block" />. Lack of{" "}
              <strong>28</strong>{" "}
              <Input type="text" className="w-20 mx-1 inline-block" /> by
              governments and lack of public <strong>29</strong>{" "}
              <Input type="text" className="w-20 mx-1 inline-block" /> can lead
              to environmental problems such as <strong>30</strong>{" "}
              <Input type="text" className="w-20 mx-1 inline-block" /> or the
              destruction of <strong>31</strong>{" "}
              <Input type="text" className="w-20 mx-1 inline-block" />
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="mb-1">
                  <strong>A</strong> funding
                </p>
                <p className="mb-1">
                  <strong>B</strong> trees
                </p>
                <p className="mb-1">
                  <strong>C</strong> rare species
                </p>
                <p className="mb-1">
                  <strong>D</strong> moral standards
                </p>
                <p className="mb-1">
                  <strong>E</strong> control
                </p>
              </div>
              <div>
                <p className="mb-1">
                  <strong>F</strong> involvement
                </p>
                <p className="mb-1">
                  <strong>G</strong> flooding
                </p>
                <p className="mb-1">
                  <strong>H</strong> overfishing
                </p>
                <p className="mb-1">
                  <strong>I</strong> worker support
                </p>
                <p className="mb-1">
                  <strong>J</strong> responsibility
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-34</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 32-34 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> The main idea of the third paragraph is
                that environmental damage
              </p>
              <RadioGroup name="question32" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-a" value="A" />
                  <Label htmlFor="q32-a" className="ml-2">
                    A requires political action if it is to be stopped.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-b" value="B" />
                  <Label htmlFor="q32-b" className="ml-2">
                    B is the result of ignorance on the part of the public.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-c" value="C" />
                  <Label htmlFor="q32-c" className="ml-2">
                    C could be prevented by the action of ordinary people.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-d" value="D" />
                  <Label htmlFor="q32-d" className="ml-2">
                    D can only be stopped by educating business leaders.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> In the fourth paragraph, the writer
                describes ways in which the public can
              </p>
              <RadioGroup name="question33" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-a" value="A" />
                  <Label htmlFor="q33-a" className="ml-2">
                    A reduce their own individual impact on the environment.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-b" value="B" />
                  <Label htmlFor="q33-b" className="ml-2">
                    B learn more about the impact of business of the
                    environment.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-c" value="C" />
                  <Label htmlFor="q33-c" className="ml-2">
                    C raise awareness of the effects of specific environmental
                    disasters.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-d" value="D" />
                  <Label htmlFor="q33-d" className="ml-2">
                    D influence the environmental policies of businesses and
                    governments.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> What pressure was exerted by big business
                in the case of the disease BSE?
              </p>
              <RadioGroup name="question34" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-a" value="A" />
                  <Label htmlFor="q34-a" className="ml-2">
                    A Meat packers stopped supplying hamburgers to fast-food
                    chains.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-b" value="B" />
                  <Label htmlFor="q34-b" className="ml-2">
                    B A fast-food company forced their meat suppliers to follow
                    the law.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-c" value="C" />
                  <Label htmlFor="q34-c" className="ml-2">
                    C Meat packers persuaded the government to reduce their
                    expenses.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-d" value="D" />
                  <Label htmlFor="q34-d" className="ml-2">
                    D A fast-food company encouraged the government to introduce
                    legislation.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 35-39</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 35-39 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the claims of
              the writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the claims of the
              writer
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if it is impossible to say what the
              writer thinks about this
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> The public should be prepared to fund good
                environmental practices.
              </p>
              <RadioGroup name="question35" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q35-yes" value="YES" />
                  <Label htmlFor="q35-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-no" value="NO" />
                  <Label htmlFor="q35-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q35-ng" value="NOT GIVEN" />
                  <Label htmlFor="q35-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>36.</strong> There is a contrast between the moral
                principles of different businesses.
              </p>
              <RadioGroup name="question36" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q36-yes" value="YES" />
                  <Label htmlFor="q36-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-no" value="NO" />
                  <Label htmlFor="q36-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q36-ng" value="NOT GIVEN" />
                  <Label htmlFor="q36-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> It is important to make a clear distinction
                between acceptable and unacceptable behaviour.
              </p>
              <RadioGroup name="question37" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-yes" value="YES" />
                  <Label htmlFor="q37-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-no" value="NO" />
                  <Label htmlFor="q37-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-ng" value="NOT GIVEN" />
                  <Label htmlFor="q37-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> The public have successfully influenced
                businesses in the past.
              </p>
              <RadioGroup name="question38" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-yes" value="YES" />
                  <Label htmlFor="q38-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-no" value="NO" />
                  <Label htmlFor="q38-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-ng" value="NOT GIVEN" />
                  <Label htmlFor="q38-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> In the future, businesses will show more
                concern for the environment.
              </p>
              <RadioGroup name="question39" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-yes" value="YES" />
                  <Label htmlFor="q39-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-no" value="NO" />
                  <Label htmlFor="q39-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-ng" value="NOT GIVEN" />
                  <Label htmlFor="q39-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Question 40</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in box 40 on your answer sheet.
          </p>

          <div className="question-item">
            <p className="mb-3">
              <strong>40.</strong> What would be the best subheading for this
              passage?
            </p>
            <RadioGroup name="question40" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q40-a" value="A" />
                <Label htmlFor="q40-a" className="ml-2">
                  A Will the world survive the threat caused by big businesses?
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-b" value="B" />
                <Label htmlFor="q40-b" className="ml-2">
                  B How can big businesses be encouraged to be less driven by
                  profit?
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-c" value="C" />
                <Label htmlFor="q40-c" className="ml-2">
                  C What environmental dangers are caused by the greed of
                  businesses?
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q40-d" value="D" />
                <Label htmlFor="q40-d" className="ml-2">
                  D Are big businesses to blame for the damage they cause the
                  environment?
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export { Cambridge15ARTest4Questions };
export default Cambridge15ARTest4Questions;
