// filepath: d:\ABYSS\CODE\WEB\FREELANCE\ielts 7 plus\ielts-7\src\data\tests\questions\cambridge17_ar_test3_questions.tsx
// Cambridge 17 Academic Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 Academic Reading Test 3
 */
export const Cambridge17ARTest3Questions: React.FC = () => {
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

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">The thylacine</h4>
            <h5 className="font-semibold mb-2">Appearance and behaviour</h5>

            <ul className="space-y-3 list-none pl-0">
              <li>– looked rather like a dog</li>
              <li>– had a series of stripes along its body and tail</li>
              <li>
                – ate an entirely <strong>1.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> diet
              </li>
              <li>
                – probably depended mainly on <strong>2.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> when
                hunting
              </li>
              <li>
                – young spent first months of life inside its mother's{" "}
                <strong>3.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>

            <h5 className="font-semibold mt-4 mb-2">Decline and extinction</h5>

            <ul className="space-y-3 list-none pl-0">
              <li>
                – last evidence in mainland Australia is a 3,100-year-old{" "}
                <strong>4.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>
                – probably went extinct in mainland Australia due to animals
                known as dingoes
              </li>
              <li>
                – reduction in <strong>5.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                available sources of food were partly responsible for decline in
                Tasmania
              </li>
            </ul>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 6-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 6-13 on your answer sheet, write</p>
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
                <strong>6.</strong> Significant numbers of thylacines were
                killed by humans from the 1830s onwards.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q6-true" />
                  <Label htmlFor="q6-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q6-false" />
                  <Label htmlFor="q6-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q6-ng" />
                  <Label htmlFor="q6-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>7.</strong> Several thylacines were born in zoos during
                the late 1800s.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q7-true" />
                  <Label htmlFor="q7-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q7-false" />
                  <Label htmlFor="q7-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q7-ng" />
                  <Label htmlFor="q7-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>8.</strong> John Gould's prediction about the thylacine
                surprised some biologists.
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
                <strong>9.</strong> In the early 1900s, many scientists became
                worried about the possible extinction of the thylacine.
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
                <strong>10.</strong> T.T. Flynn's proposal to rehome captive
                thylacines on an island proved to be impractical.
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
                <strong>11.</strong> There were still reasonable numbers of
                thylacines in existence when a piece of legislation protecting
                the species during their breeding season was passed.
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
                <strong>12.</strong> From 1930 to 1936, the only known living
                thylacines were all in captivity.
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
                <strong>13.</strong> Attempts to find living thylacines are now
                rarely made.
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
          <p className="mb-2">Reading Passage 2 has eight paragraphs, A-H.</p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-H, in boxes 14-20 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14.</strong> examples of a range of potential
                environmental advantages of oil palm tree cultivation
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15.</strong> description of an organisation which
                controls the environmental impact of palm oil production
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16.</strong> examples of the widespread global use of
                palm oil
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17.</strong> reference to a particular species which
                could benefit the ecosystem of oil palm plantations
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18.</strong> figures illustrating the rapid expansion of
                the palm oil industry
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19.</strong> an economic justification for not opposing
                the palm oil industry
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20.</strong> examples of creatures badly affected by the
                establishment of oil palm plantations
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-22</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>.
          </p>
          <p className="mb-4">
            Write the correct letters in boxes 21 and 22 on your answer sheet.
          </p>
          <p className="mb-4">
            Which <strong>TWO</strong> statements are made about the Roundtable
            on Sustainable Palm Oil (RSPO)?
          </p>

          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-a" />
              <Label htmlFor="q21-22-a" className="flex-1">
                A Its membership has grown steadily over the course of the last
                decade.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-b" />
              <Label htmlFor="q21-22-b" className="flex-1">
                B It demands that certified producers be open and honest about
                their practices.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-c" />
              <Label htmlFor="q21-22-c" className="flex-1">
                C It took several years to establish its set of criteria for
                sustainable palm oil certification.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-d" />
              <Label htmlFor="q21-22-d" className="flex-1">
                D Its regulations regarding sustainability are stricter than
                those governing other industries.
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox id="q21-22-e" />
              <Label htmlFor="q21-22-e" className="flex-1">
                E It was formed at the request of environmentalists concerned
                about the loss of virgin forests.
              </Label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 23-26 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>23.</strong> One advantage of palm oil for manufacturers
                is that it stays{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> even
                when not refrigerated.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>24.</strong> The{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> is the
                best known of the animals suffering habitat loss as a result of
                the spread of oil palm plantations.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>25.</strong> As one of its criteria for the
                certification of sustainable palm oil, the RSPO insists that
                growers check{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> on a
                routine basis.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>26.</strong> Ellwood and his researchers are looking
                into whether the bird's nest fern could restore{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> in
                areas where oil palm trees are grown.
              </p>
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
                <strong>27.</strong> What point does Shester make about Barr's
                book in the first paragraph?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    It gives a highly original explanation for urban
                    development.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    Elements of Barr's research papers are incorporated
                    throughout the book.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    Other books that are available on the subject have taken a
                    different approach.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    It covers a range of factors that affected the development
                    of New York.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28.</strong> How does Shester respond to the information
                in the book about tenements?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    She describes the reasons for Barr's interest.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    She indicates a potential problem with Barr's analysis.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    She compares Barr's conclusion with that of other writers.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    She provides details about the sources Barr used for his
                    research.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29.</strong> What does Shester say about chapter six of
                the book?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    It contains conflicting data.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    It focuses too much on possible trends.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    It is too specialised for most readers.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    It draws on research that is out of date.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30.</strong> What does Shester suggest about the
                chapters focusing on the 1920s building boom?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    The information should have been organised differently.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    More facts are needed about the way construction was
                    financed.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    The explanation that is given for the building boom is
                    unlikely.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    Some parts will have limited appeal to certain people.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31.</strong> What impresses Shester the most about the
                chapter on land values?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q31-a" className="mt-1" />
                  <Label htmlFor="q31-a" className="flex-1">
                    the broad time period that is covered
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q31-b" className="mt-1" />
                  <Label htmlFor="q31-b" className="flex-1">
                    the interesting questions that Barr asks
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q31-c" className="mt-1" />
                  <Label htmlFor="q31-c" className="flex-1">
                    the nature of the research into the topic
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q31-d" className="mt-1" />
                  <Label htmlFor="q31-d" className="flex-1">
                    the recommendations Barr makes for the future
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-35</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 32-35 on your answer sheet, write</p>
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

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>32.</strong> The description in the first chapter of how
                New York probably looked from the air in the early 1600s lacks
                interest.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q32-yes" />
                  <Label htmlFor="q32-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q32-no" />
                  <Label htmlFor="q32-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q32-ng" />
                  <Label htmlFor="q32-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>33.</strong> Chapters two and three prepare the reader
                well for material yet to come.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q33-yes" />
                  <Label htmlFor="q33-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q33-no" />
                  <Label htmlFor="q33-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q33-ng" />
                  <Label htmlFor="q33-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>34.</strong> The biggest problem for many
                nineteenth-century New York immigrant neighbourhoods was a lack
                of amenities.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q34-yes" />
                  <Label htmlFor="q34-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q34-no" />
                  <Label htmlFor="q34-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q34-ng" />
                  <Label htmlFor="q34-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>35.</strong> In the nineteenth century, New York's
                immigrant neighbourhoods tended to concentrate around the
                harbour.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q35-yes" />
                  <Label htmlFor="q35-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q35-no" />
                  <Label htmlFor="q35-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q35-ng" />
                  <Label htmlFor="q35-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 36-40</h3>
          <p className="mb-2">
            Complete the summary using the list of phrases, A-J, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-J, in boxes 36-40 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">The bedrock myth</h4>

            <p className="mb-4">
              In chapter seven, Barr indicates how the lack of bedrock close to
              the surface does not explain why skyscrapers are absent from{" "}
              <strong>36.</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              He points out that although the cost of foundations increases when
              bedrock is deep below the surface, this cannot be regarded as{" "}
              <strong>37.</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              especially when compared to <strong>38.</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              A particularly enjoyable part of the chapter was Barr's account of
              how foundations are built. He describes not only how{" "}
              <strong>39.</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />{" "}
              are made possible by the use of caissons, but he also discusses
              their <strong>40.</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-J"
              />
              . The chapter is well-researched but relatively easy to
              understand.
            </p>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <strong>A</strong> development plans
              </div>
              <div>
                <strong>B</strong> deep excavations
              </div>
              <div>
                <strong>C</strong> great distance
              </div>
              <div>
                <strong>D</strong> excessive expense
              </div>
              <div>
                <strong>E</strong> impossible tasks
              </div>
              <div>
                <strong>F</strong> associated risks
              </div>
              <div>
                <strong>G</strong> water level
              </div>
              <div>
                <strong>H</strong> specific areas
              </div>
              <div>
                <strong>I</strong> total expenditure
              </div>
              <div>
                <strong>J</strong> construction guidelines
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
