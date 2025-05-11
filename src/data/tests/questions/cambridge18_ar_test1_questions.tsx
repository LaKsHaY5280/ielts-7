import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 18 Academic Reading Test 1
 */
export const Cambridge18ARTest1Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-3</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> from
            the passage for each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 1-3 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Urban Farming in Paris</h4>

            <p className="mb-3">
              <strong>1</strong> Vertical tubes are used to grow strawberries,{" "}
              <Input type="text" className="w-32 inline-block mx-1" />, and
              herbs.
            </p>

            <p className="mb-3">
              <strong>2</strong> There will eventually be a daily harvest of as
              much as <Input type="text" className="w-32 inline-block mx-1" />{" "}
              in weight of fruit and vegetables.
            </p>

            <p className="mb-3">
              <strong>3</strong> It may be possible that the farm's produce will
              account for as much as 10% of the city's{" "}
              <Input type="text" className="w-32 inline-block mx-1" /> overall.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 4-7</h3>
          <p className="mb-2">Complete the table below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 4-7 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              Intensive farming versus aeroponic urban farming
            </h4>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2 text-left"></th>
                  <th className="border p-2 text-left">Growth</th>
                  <th className="border p-2 text-left">Selection</th>
                  <th className="border p-2 text-left">Sale</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Intensive farming</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        wide range of <strong>4</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        used
                      </li>
                      <li>techniques pollute air</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>quality not good</li>
                      <li>
                        varieties of fruit and vegetables chosen that can
                        survive long <strong>5</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />
                      </li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        <strong>6</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />{" "}
                        receive very little of overall income
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Aeroponic urban farming</td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>no soil used</li>
                      <li>nutrients added to water, which is recycled</li>
                    </ul>
                  </td>
                  <td className="border p-2">
                    <ul className="list-disc pl-4">
                      <li>
                        produce chosen because of its <strong>7</strong>{" "}
                        <Input type="text" className="w-32 inline-block mx-1" />
                      </li>
                    </ul>
                  </td>
                  <td className="border p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 8-13 on your answer sheet, write</p>
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

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>8</strong> Aeroponic urban farming requires less space
                than conventional farming.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q8-true" />
                  <Label htmlFor="q8-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q8-false" />
                  <Label htmlFor="q8-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q8-ng" />
                  <Label htmlFor="q8-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>9</strong> Hardy's initial experimental work was on a
                much smaller scale than his current project.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q9-true" />
                  <Label htmlFor="q9-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q9-false" />
                  <Label htmlFor="q9-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q9-ng" />
                  <Label htmlFor="q9-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>10</strong> Most of the farms that consult Agripolis
                intend to grow their crops on the ground rather than on
                rooftops.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q10-true" />
                  <Label htmlFor="q10-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q10-false" />
                  <Label htmlFor="q10-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q10-ng" />
                  <Label htmlFor="q10-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>11</strong> In Hardy's view, aeroponic techniques use
                significantly less water than traditional farming methods.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q11-true" />
                  <Label htmlFor="q11-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q11-false" />
                  <Label htmlFor="q11-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q11-ng" />
                  <Label htmlFor="q11-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>12</strong> Hardy's aeroponic farm uses more energy than
                some other urban farming methods.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q12-true" />
                  <Label htmlFor="q12-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q12-false" />
                  <Label htmlFor="q12-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q12-ng" />
                  <Label htmlFor="q12-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>13</strong> Hardy has plans to extend the range of
                fruits and vegetables that can be grown using aeroponic methods.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q13-true" />
                  <Label htmlFor="q13-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q13-false" />
                  <Label htmlFor="q13-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q13-ng" />
                  <Label htmlFor="q13-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-20</h3>
          <p className="mb-2">Reading Passage 2 has seven paragraphs, A-G.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-G, in boxes 14-20 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> examples of a range of potential
                environmental advantages of low-use wood
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> an explanation of what determines a tree's
                usefulness for different people
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> examples of the widespread uses of wood for
                energy generation
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17</strong> reference to cuttings performed to protect
                forests against disease
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18</strong> some negative results of traditional
                forestry management in the region
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19</strong> a description of how one cutting technique
                can offer financial benefits over time
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20</strong> examples of cutting methods that can be used
                to help forests recover
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-22</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, A-E.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 21 and 22 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> of the following statements are true of a
            TSI Cut?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-a" />
              <Label htmlFor="q21-22-a" className="flex-1">
                A It helps only the highest quality trees to thrive.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-b" />
              <Label htmlFor="q21-22-b" className="flex-1">
                B It can be adjusted according to the landowner's wishes.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-c" />
              <Label htmlFor="q21-22-c" className="flex-1">
                C It removes trees to prevent the spread of disease.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-d" />
              <Label htmlFor="q21-22-d" className="flex-1">
                D It results in a forest where all trees are at a similar stage
                of growth.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-e" />
              <Label htmlFor="q21-22-e" className="flex-1">
                E It ensures that rare species of trees are protected.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">
            Complete the summary using the list of words, A-I, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-I, in boxes 23-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              Retention of low-use wood in forests
            </h4>

            <p className="mb-4">
              Although low-use wood can be cut down for energy generation, it is
              important that some types remain in the forest. The tops of trees
              that are cut down should be allowed to rot, as they provide
              valuable <strong>23</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              for the soil. Trees that contain <strong>24</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              shelter a variety of birds and small mammals that feed on harmful
              insects. Some small trees have value because, like{" "}
              <strong>25</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              , they are a source of food for forest animals. In addition,{" "}
              <strong>26</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              species should be preserved to maintain the diversity of the
              forest.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <strong>A</strong> fire
              </div>
              <div>
                <strong>B</strong> nutrients
              </div>
              <div>
                <strong>C</strong> grass
              </div>
              <div>
                <strong>D</strong> rare
              </div>
              <div>
                <strong>E</strong> cavities
              </div>
              <div>
                <strong>F</strong> strong
              </div>
              <div>
                <strong>G</strong> diseased
              </div>
              <div>
                <strong>H</strong> hawthorn
              </div>
              <div>
                <strong>I</strong> types
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">Choose the correct letter, A, B, C or D.</p>
          <p className="mb-4">
            Write the correct letter in boxes 27-31 on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-2">
                <strong>27</strong> What point does the writer make in the first
                paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    A There has been a decline in the number of commercial
                    satellites launched recently.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    B The launch of satellites has diversified in terms of those
                    responsible.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    C The number of satellites in space is increasing rapidly.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    D The plans for satellite deployment may not be practical.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> Why is it difficult for satellite operators
                to avoid all potential collisions?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    A Most of the satellites they operate are too small.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    B Their satellites are not designed to change direction.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    C They cannot predict when a collision might occur.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    D They need to prioritise the satellites' intended purpose.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> According to the second paragraph, what is
                happening in space research?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    A Various ways of tackling space junk are being
                    investigated.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    B Research is focusing on how to repair damaged satellites.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    C Detailed studies are being carried out into how satellites
                    behave.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    D Scientists are trying to find ways of preventing
                    satellites from colliding.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> What does Holger Krag say about the 25-year
                goal?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    A The time period chosen is too long.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    B It is sometimes seen as unreasonable.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    C It will soon be reinforced by law.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    D Not everyone is making sufficient effort to achieve it.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> What is Moriba Jah's opinion about the
                current situation?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q31-a" className="mt-1" />
                  <Label htmlFor="q31-a" className="flex-1">
                    A Satellite operators have been given excessive freedom.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q31-b" className="mt-1" />
                  <Label htmlFor="q31-b" className="flex-1">
                    B Not enough is being done to avoid damage to the space
                    environment.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q31-c" className="mt-1" />
                  <Label htmlFor="q31-c" className="flex-1">
                    C Space companies need to develop more detailed guidelines.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q31-d" className="mt-1" />
                  <Label htmlFor="q31-d" className="flex-1">
                    D Competitive interests are making the space environment
                    dangerous.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <p className="mb-2">
            Complete each sentence with the correct ending, A-G, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-G, in boxes 32-35 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>32</strong> According to Carolin Frueh, if current
                trends continue, space
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33</strong> According to the Inter-Agency Space Debris
                Coordination Committee, satellites may explode if
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34</strong> According to Holger Krag, defunct satellites
                may remain in orbit if
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35</strong> According to Marlon Sorge, satellites could
                move around safely if
              </p>
              <Input type="text" className="w-16" placeholder="A-G" />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <div>
              <strong>A</strong> their operators run out of money.
            </div>
            <div>
              <strong>B</strong> their location could be determined with
              accuracy.
            </div>
            <div>
              <strong>C</strong> will become permanently inaccessible.
            </div>
            <div>
              <strong>D</strong> they remain there for a long time.
            </div>
            <div>
              <strong>E</strong> other operators were unaware of their purpose.
            </div>
            <div>
              <strong>F</strong> they contain materials still under pressure.
            </div>
            <div>
              <strong>G</strong> they fail to update their orbital details.
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Complete the summary using the list of words, A-I, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-I, in boxes 36-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Space Traffic Management</h4>

            <p className="mb-4">
              Space traffic management is similar to the management of{" "}
              <strong>36</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              on Earth. However, there is a problem with the <strong>37</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              of space objects. This is shown by the online <strong>38</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              of Moriba Jah. Different <strong>39</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />{" "}
              of information may give conflicting details for an object. Without
              a third source of information, it is not possible to make a{" "}
              <strong>40</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-I"
              />
              .
            </p>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <strong>A</strong> comparison
              </div>
              <div>
                <strong>B</strong> aircraft
              </div>
              <div>
                <strong>C</strong> database
              </div>
              <div>
                <strong>D</strong> tracking
              </div>
              <div>
                <strong>E</strong> estimate
              </div>
              <div>
                <strong>F</strong> statistics
              </div>
              <div>
                <strong>G</strong> catalogue
              </div>
              <div>
                <strong>H</strong> sources
              </div>
              <div>
                <strong>I</strong> confirmation
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
