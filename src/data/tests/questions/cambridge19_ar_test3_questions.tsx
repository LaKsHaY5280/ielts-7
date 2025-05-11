import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 19 Academic Reading Test 3
 */
export const Cambridge19ARTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-7</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">In boxes 1-7 on your answer sheet, write</p>
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
                <strong>1</strong> Archaeological research had taken place on
                the island of Obi before the arrival of Ceri Shipton and his
                colleagues.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q1-true" />
                  <Label htmlFor="q1-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q1-false" />
                  <Label htmlFor="q1-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q1-ng" />
                  <Label htmlFor="q1-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>2</strong> The team's research on Obi was the first step
                in their exploration of the Wallacean islands.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q2-true" />
                  <Label htmlFor="q2-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q2-false" />
                  <Label htmlFor="q2-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q2-ng" />
                  <Label htmlFor="q2-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>3</strong> Axes similar to the earliest ones found at
                Kelo have been discovered on other islands in the region.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q3-true" />
                  <Label htmlFor="q3-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q3-false" />
                  <Label htmlFor="q3-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q3-ng" />
                  <Label htmlFor="q3-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>4</strong> Obi used to be connected to the island of
                Bisa by a land bridge.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q4-true" />
                  <Label htmlFor="q4-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q4-false" />
                  <Label htmlFor="q4-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q4-ng" />
                  <Label htmlFor="q4-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>5</strong> The use of stone instead of shell for making
                axes was probably linked to changes in climate.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="TRUE" id="q5-true" />
                  <Label htmlFor="q5-true">TRUE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="FALSE" id="q5-false" />
                  <Label htmlFor="q5-false">FALSE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q5-ng" />
                  <Label htmlFor="q5-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>6</strong> Rothschild's cuscus was only hunted because
                it was destructive to the forest environment.
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
                <strong>7</strong> Fishing probably replaced hunting as the main
                means of survival when the Kelo shelters were abandoned.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 8-13</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 8-13 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Archaeological findings at Kelo</h4>

            <ul className="list-disc pl-5 mb-4">
              <li>
                Shipton's team found prehistoric rock shelters in{" "}
                <strong>8</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
              <li>The first axes found at Kelo were made from clam shells</li>
              <li>
                Later, harder axes made from <strong>9</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> were
                used to clear the dense rainforest
              </li>
              <li>
                The researchers found animal <strong>10</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />,
                showing that prehistoric people on Obi hunted for food
              </li>
              <li>
                Volcanic glass and <strong>11</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> found
                at the site show that the island's inhabitants travelled to
                other islands
              </li>
              <li>
                The shelters were abandoned for thousands of years before being
                occupied by people who owned <strong>12</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                precious metals
              </li>
              <li>
                The final occupation of the site probably involved people
                trading <strong>13</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-16</h3>
          <p className="mb-2">Reading Passage 2 has eight paragraphs, A-H.</p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, A-H, in boxes 14-16 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14</strong> a mention of the need to give local
                communities economic benefits from wetlands
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15</strong> examples of ways in which wetlands are being
                damaged or destroyed
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16</strong> differing opinions on the current state of
                the world's wetlands
              </p>
              <Input type="text" className="w-16" placeholder="A-H" />
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 17-20</h3>
          <p className="mb-2">
            Choose <strong>FOUR</strong> letters, A-H.
          </p>
          <p className="mb-2">
            Write the correct letter, A-H, in boxes 17-20 on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> Your answers may be given in any order.
          </p>
          <p className="mb-4">
            According to the text, which <strong>FOUR</strong> of the following
            are benefits of wetlands?
          </p>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-a"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-a" className="text-sm">
                A offering protection against the effects of extreme weather
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-b"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-b" className="text-sm">
                B providing people with a means of earning their living
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-c"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-c" className="text-sm">
                C containing minerals that are used to create essential products
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-d"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-d" className="text-sm">
                D preventing the loss of unique animal and plant species
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-e"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-e" className="text-sm">
                E having religious or cultural significance
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-f"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-f" className="text-sm">
                F supporting agriculture by improving the fertility of the soil
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="q17-20-g"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="q17-20-g" className="text-sm">
                G slowing the rate of climate change
              </label>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-22</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 21-22 on your answer sheet.
          </p>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>21</strong> When loggers want to clear wetland forests,
                they first create{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> to
                allow them to enter the area by boat.
              </p>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>22</strong> Silvius is worried that some provinces in
                Sumatra and Borneo will be affected by{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />,
                causing parts of them to become flooded.
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 23-26 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">Wetlands at Risk</h4>

            <p className="mb-4">
              Peatlands are particularly valuable as they store{" "}
              <strong>23</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. However,
              when they are drained for commercial purposes, this storage
              capacity is lost and CO2 is emitted into the atmosphere. Cleared
              peatlands are also likely to suffer from <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> which
              create further pollution. According to Silvius, oil palm
              cultivation brings only short-term commercial benefits, but leads
              to the permanent loss of <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              areas affected.
            </p>

            <p className="mb-4">
              According to Tickner, damage to wetlands can also be caused by
              less obvious factors, such as <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> from
              fields nearby. However, he believes such damage is usually
              accidental rather than deliberate.
            </p>
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
                <strong>27</strong> What does the writer say in the first
                paragraph about his conversation with Professor Waibel?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q27-a" className="mt-1" />
                  <Label htmlFor="q27-a" className="flex-1">
                    It demonstrated that translation technology is effective in
                    noisy situations.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q27-b" className="mt-1" />
                  <Label htmlFor="q27-b" className="flex-1">
                    It showed that higher-quality electronic connections are
                    needed for speech translation.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q27-c" className="mt-1" />
                  <Label htmlFor="q27-c" className="flex-1">
                    It was successful despite the technological challenges
                    involved.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q27-d" className="mt-1" />
                  <Label htmlFor="q27-d" className="flex-1">
                    It highlighted the limitations of current speech technology.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>28</strong> What point does the writer make about the
                system used at Karlsruhe Institute of Technology?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q28-a" className="mt-1" />
                  <Label htmlFor="q28-a" className="flex-1">
                    It benefits from optimal learning conditions.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q28-b" className="mt-1" />
                  <Label htmlFor="q28-b" className="flex-1">
                    It could be made available to students at other
                    universities.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q28-c" className="mt-1" />
                  <Label htmlFor="q28-c" className="flex-1">
                    It offers more functions than just speech translation.
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q28-d" className="mt-1" />
                  <Label htmlFor="q28-d" className="flex-1">
                    It is still at an early stage of development.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>29</strong> Why does the writer mention 'The
                Hitchhiker's Guide to the Galaxy'?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q29-a" className="mt-1" />
                  <Label htmlFor="q29-a" className="flex-1">
                    to show how science fiction often inspires technological
                    developments
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q29-b" className="mt-1" />
                  <Label htmlFor="q29-b" className="flex-1">
                    to praise the author's accurate prediction of future
                    technology
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q29-c" className="mt-1" />
                  <Label htmlFor="q29-c" className="flex-1">
                    to provide an example of people's longstanding interest in
                    translation devices
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q29-d" className="mt-1" />
                  <Label htmlFor="q29-d" className="flex-1">
                    to suggest that translation technology is developing more
                    rapidly than anticipated
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>30</strong> According to Andrew Ochoa, what is the aim
                of Waverly's new translator model?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q30-a" className="mt-1" />
                  <Label htmlFor="q30-a" className="flex-1">
                    to remove the need for strangers to share translator devices
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q30-b" className="mt-1" />
                  <Label htmlFor="q30-b" className="flex-1">
                    to make the technology work efficiently for business users
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q30-c" className="mt-1" />
                  <Label htmlFor="q30-c" className="flex-1">
                    to improve the experiences of tourists in foreign countries
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q30-d" className="mt-1" />
                  <Label htmlFor="q30-d" className="flex-1">
                    to make translator earpieces available to a wider range of
                    users
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>31</strong> In the sixth paragraph, what aspect of
                artificial translation does the writer mention as needing
                improvement?
              </p>
              <RadioGroup className="flex flex-col space-y-2">
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="A" id="q31-a" className="mt-1" />
                  <Label htmlFor="q31-a" className="flex-1">
                    reliability across multiple languages
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="B" id="q31-b" className="mt-1" />
                  <Label htmlFor="q31-b" className="flex-1">
                    focus on countries outside Asia
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="C" id="q31-c" className="mt-1" />
                  <Label htmlFor="q31-c" className="flex-1">
                    speed of delivery
                  </Label>
                </div>
                <div className="flex items-start space-x-2">
                  <RadioGroupItem value="D" id="q31-d" className="mt-1" />
                  <Label htmlFor="q31-d" className="flex-1">
                    integration with mobile devices
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            Complete the summary using the list of words, A-H, below.
          </p>
          <p className="mb-4">
            Write the correct letter, A-H, in boxes 32-36 on your answer sheet.
          </p>

          <div className="border p-4 mb-6">
            <h4 className="font-bold mb-2">
              Challenges for translation technology
            </h4>

            <p className="mb-4">
              Translation systems must overcome <strong>32</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-H"
              />{" "}
              problems such as noise. They also need to deal with social and
              cultural issues, such as showing proper <strong>33</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-H"
              />{" "}
              to those in positions of authority. However, they could prove
              valuable in maintaining the <strong>34</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-H"
              />{" "}
              of particular cultures. Another promising application is in
              reducing the <strong>35</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-H"
              />{" "}
              between the generations in families where migration has occurred.
              Yet the writer concludes that, whatever <strong>36</strong>{" "}
              <Input
                type="text"
                className="w-16 mx-1 inline-block"
                placeholder="A-H"
              />{" "}
              is made in translation technology, learning and sharing a language
              will continue to have important social benefits.
            </p>

            <div className="grid grid-cols-4 gap-2">
              <div>
                <strong>A</strong> distance
              </div>
              <div>
                <strong>B</strong> recognition
              </div>
              <div>
                <strong>C</strong> traditions
              </div>
              <div>
                <strong>D</strong> progress
              </div>
              <div>
                <strong>E</strong> practical
              </div>
              <div>
                <strong>F</strong> respect
              </div>
              <div>
                <strong>G</strong> advantage
              </div>
              <div>
                <strong>H</strong> identity
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Do the following statements agree with the views of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 37-40 on your answer sheet, write</p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>YES</strong> if the statement agrees with the views of the
              writer
            </p>
            <p className="mb-1">
              <strong>NO</strong> if the statement contradicts the views of the
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
                <strong>37</strong> The quality of modern artificial translation
                devices is generally very good.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q37-yes" />
                  <Label htmlFor="q37-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q37-no" />
                  <Label htmlFor="q37-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q37-ng" />
                  <Label htmlFor="q37-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>38</strong> There's a growing demand for translation
                technology in the Asian market.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q38-yes" />
                  <Label htmlFor="q38-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q38-no" />
                  <Label htmlFor="q38-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q38-ng" />
                  <Label htmlFor="q38-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>39</strong> Translation devices will soon make learning
                foreign languages unnecessary.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q39-yes" />
                  <Label htmlFor="q39-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q39-no" />
                  <Label htmlFor="q39-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q39-ng" />
                  <Label htmlFor="q39-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>40</strong> Using the same language strengthens
                relationships between people.
              </p>
              <RadioGroup className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="YES" id="q40-yes" />
                  <Label htmlFor="q40-yes">YES</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NO" id="q40-no" />
                  <Label htmlFor="q40-no">NO</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="NOT GIVEN" id="q40-ng" />
                  <Label htmlFor="q40-ng">NOT GIVEN</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
