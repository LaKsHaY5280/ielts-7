// Cambridge 15 Academic Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 Academic Reading Test 2
 */
export const Cambridge15ARTest2Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-6</h3>
          <p className="mb-2">
            Reading Passage 1 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes{" "}
            <strong>1-6</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1.</strong> reference to an appealing way of using dance
                that the writer is not proposing
              </p>
              <RadioGroup name="question1" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q1-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q1-${letter}`} value={letter} />
                    <Label htmlFor={`q1-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2.</strong> an example of a contrast between past and
                present approaches to building
              </p>
              <RadioGroup name="question2" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q2-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q2-${letter}`} value={letter} />
                    <Label htmlFor={`q2-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3.</strong> mention of an objective of both dance and
                engineering
              </p>
              <RadioGroup name="question3" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q3-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q3-${letter}`} value={letter} />
                    <Label htmlFor={`q3-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4.</strong> reference to an unforeseen problem arising
                from ignoring the climate
              </p>
              <RadioGroup name="question4" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q4-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q4-${letter}`} value={letter} />
                    <Label htmlFor={`q4-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5.</strong> why some measures intended to help people
                are being reversed
              </p>
              <RadioGroup name="question5" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q5-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q5-${letter}`} value={letter} />
                    <Label htmlFor={`q5-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>6.</strong> reference to how transport has an impact on
                human lives
              </p>
              <RadioGroup name="question6" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
                  <div key={`q6-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q6-${letter}`} value={letter} />
                    <Label htmlFor={`q6-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-13</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 7-13</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <p className="mb-4">
              Guard rails were introduced on British roads to improve the{" "}
              <strong>7.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              pedestrians, while ensuring that the movement of{" "}
              <strong>8.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> is not
              disrupted. Pedestrians are led to access points, and encouraged to
              cross one <strong>9.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> at a
              time. An unintended effect is to create psychological difficulties
              in crossing the road, particularly for less <strong>10.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> people.
              Another result is that some people cross the road in a{" "}
              <strong>11.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> way. The
              guard rails separate <strong>12.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, and make
              it more difficult to introduce forms of transport that are{" "}
              <strong>13.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-17</h3>
          <p className="mb-2">
            Reading Passage 2 has six paragraphs, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A-F</strong>, in boxes{" "}
            <strong>14-17</strong> on your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> a reference to how further disappearance of
                multiple species could be avoided
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
                <strong>15.</strong> explanation of a way of reproducing an
                extinct animal using the DNA of only that species
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
                <strong>16.</strong> reference to a habitat which has suffered
                following the extinction of a species
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
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
                <strong>17.</strong> mention of the exact point at which a
                particular species became extinct
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F"].map((letter) => (
                  <div key={`q17-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q17-${letter}`} value={letter} />
                    <Label htmlFor={`q17-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 18-22</h3>
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
            each answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 18-22</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              The woolly mammoth revival project
            </h4>
            <p className="mb-4">
              Professor George Church and his team are trying to identify the{" "}
              <strong>18.</strong>{" "}
              <Input type="text" className="w-40 mx-1 inline-block" /> which
              enabled mammoths to live in the tundra. The findings could help
              preserve the mammoth's close relative, the endangered Asian
              elephant. According to Church, introducing Asian elephants to the
              tundra would involve certain physical adaptations to minimise{" "}
              <strong>19.</strong>{" "}
              <Input type="text" className="w-40 mx-1 inline-block" />. To
              survive in the tundra, the species would need to have the
              mammoth-like features of thicker hair, <strong>20.</strong>{" "}
              <Input type="text" className="w-40 mx-1 inline-block" /> of a
              reduced size and more <strong>21.</strong>{" "}
              <Input type="text" className="w-40 mx-1 inline-block" />.
              Repopulating the tundra with mammoths or Asian elephant/mammoth
              hybrids would also have an impact on the environment, which could
              help to reduce temperatures and decrease <strong>22.</strong>{" "}
              <Input type="text" className="w-40 mx-1 inline-block" />.
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 23-26</h3>
          <p className="mb-2">
            Look at the following statements (Questions 23-26) and the list of
            people below.
          </p>
          <p className="mb-2">
            Match each statement with the correct person, <strong>A</strong>,{" "}
            <strong>B</strong> or <strong>C</strong>.
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A</strong>, <strong>B</strong> or{" "}
            <strong>C</strong>, in boxes <strong>23-26</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of People</h4>
            <p className="mb-1">
              <strong>A</strong> Ben Novak
            </p>
            <p className="mb-1">
              <strong>B</strong> Michael Archer
            </p>
            <p className="mb-1">
              <strong>C</strong> Beth Shapiro
            </p>
            <p className="mb-4">
              <em>NB You may use any letter more than once.</em>
            </p>

            <div className="space-y-6">
              <div className="question-item">
                <p className="mb-3">
                  <strong>23.</strong> Reintroducing an extinct species to its
                  original habitat could improve the health of a particular
                  species living there.
                </p>
                <RadioGroup name="question23" className="flex gap-8">
                  {["A", "B", "C"].map((letter) => (
                    <div key={`q23-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q23-${letter}`} value={letter} />
                      <Label htmlFor={`q23-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-3">
                  <strong>24.</strong> It is important to concentrate on the
                  causes of an animal's extinction.
                </p>
                <RadioGroup name="question24" className="flex gap-8">
                  {["A", "B", "C"].map((letter) => (
                    <div key={`q24-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q24-${letter}`} value={letter} />
                      <Label htmlFor={`q24-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-3">
                  <strong>25.</strong> A species brought back from extinction
                  could have an important beneficial impact on the vegetation of
                  its habitat.
                </p>
                <RadioGroup name="question25" className="flex gap-8">
                  {["A", "B", "C"].map((letter) => (
                    <div key={`q25-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q25-${letter}`} value={letter} />
                      <Label htmlFor={`q25-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-3">
                  <strong>26.</strong> Our current efforts at preserving
                  biodiversity are insufficient.
                </p>
                <RadioGroup name="question26" className="flex gap-8">
                  {["A", "B", "C"].map((letter) => (
                    <div key={`q26-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q26-${letter}`} value={letter} />
                      <Label htmlFor={`q26-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
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
            Write the correct letter in <strong>boxes 27-31</strong> on your
            answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> When referring to laughter in the first
                paragraphs, the writer emphasises
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A its impact on language.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B its function in human culture.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C its value to scientific research.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D its universality in animal societies.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> What does the writer suggest about Charley
                Douglass?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A He understood the importance of enjoying humour in a group
                    setting.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B He believed that TV viewers at home needed to be told when
                    to laugh.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C He wanted his shows to appeal to audiences across the
                    social spectrum.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D He preferred shows where audiences were present in the
                    recording studio.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> What makes the Santa Cruz study
                particularly significant?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A the various different types of laughter that were studied
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B the similar results produced by a wide range of cultures
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C the number of different academic disciplines involved
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D the many kinds of people whose laughter was recorded
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> Which of the following happened in the San
                Diego study?
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A Some participants became very upset.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B Participants exchanged roles.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C Participants who had not met before became friends.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D Some participants were unable to laugh.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> In the fifth paragraph, what did the
                results of the San Diego study suggest?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A It is clear whether a dominant laugh is produced by a
                    high- or low-status person.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B Low-status individuals in a position of power will still
                    produce submissive laughs.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C The submissive laughs of low- and high-status individuals
                    are surprisingly similar.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D High-status individuals can always be identified by their
                    way of laughing.
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            Complete the summary using the list of words, <strong>A-H</strong>,
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-H</strong>, in boxes{" "}
            <strong>32-36</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">The benefits of humour</h4>
            <p className="mb-4">
              In one study at Australian National University, randomly chosen
              groups of participants were shown one of three videos, each
              designed to generate a different kind of <strong>32.</strong>{" "}
              <Input type="text" className="w-10 mx-1 inline-block" />. When all
              participants were then given a deliberately frustrating task to
              do, it was found that those who had watched the{" "}
              <strong>33.</strong>{" "}
              <Input type="text" className="w-10 mx-1 inline-block" /> video
              persisted with the task for longer and tried harder to accomplish
              the task than either of the other two groups.
            </p>
            <p className="mb-4">
              A second study in which participants were asked to perform a
              particularly <strong>34.</strong>{" "}
              <Input type="text" className="w-10 mx-1 inline-block" /> task
              produced similar results. According to researchers David Cheng and
              Lu Wang, these findings suggest that humour not only reduces{" "}
              <strong>35.</strong>{" "}
              <Input type="text" className="w-10 mx-1 inline-block" /> and helps
              build social connections but it may also have a{" "}
              <strong>36.</strong>{" "}
              <Input type="text" className="w-10 mx-1 inline-block" /> effect on
              the body and mind.
            </p>

            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center">
                <strong className="mr-2">A</strong> laughter
              </div>
              <div className="flex items-center">
                <strong className="mr-2">B</strong> relaxing
              </div>
              <div className="flex items-center">
                <strong className="mr-2">C</strong> boring
              </div>
              <div className="flex items-center">
                <strong className="mr-2">D</strong> anxiety
              </div>
              <div className="flex items-center">
                <strong className="mr-2">E</strong> stimulating
              </div>
              <div className="flex items-center">
                <strong className="mr-2">F</strong> emotion
              </div>
              <div className="flex items-center">
                <strong className="mr-2">G</strong> enjoyment
              </div>
              <div className="flex items-center">
                <strong className="mr-2">H</strong> amusing
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 3?
          </p>
          <p className="mb-2">
            In <strong>boxes 37-40</strong> on your answer sheet, write
          </p>
          <div className="mb-4">
            <p className="mb-1">
              <strong>TRUE</strong> if the statement agrees with the claims of
              the writer
            </p>
            <p className="mb-1">
              <strong>FALSE</strong> if the statement contradicts the claims of
              the writer
            </p>
            <p className="mb-1">
              <strong>NOT GIVEN</strong> if it is impossible to say what the
              writer thinks about this
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> Participants in the Santa Cruz study were
                more accurate at identifying the laughs of friends than those of
                strangers.
              </p>
              <RadioGroup name="question37" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-true" value="TRUE" />
                  <Label htmlFor="q37-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-false" value="FALSE" />
                  <Label htmlFor="q37-false" className="ml-2">
                    FALSE
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
                <strong>38.</strong> The researchers in the San Diego study were
                correct in their predictions regarding the behaviour of the
                high-status individuals.
              </p>
              <RadioGroup name="question38" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-true" value="TRUE" />
                  <Label htmlFor="q38-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-false" value="FALSE" />
                  <Label htmlFor="q38-false" className="ml-2">
                    FALSE
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
                <strong>39.</strong> The participants in the Australian National
                University study were given a fixed amount of time to complete
                the task focusing on employee profiles.
              </p>
              <RadioGroup name="question39" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-true" value="TRUE" />
                  <Label htmlFor="q39-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-false" value="FALSE" />
                  <Label htmlFor="q39-false" className="ml-2">
                    FALSE
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

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> Cheng and Wang's conclusions were in line
                with established notions regarding task performance.
              </p>
              <RadioGroup name="question40" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-true" value="TRUE" />
                  <Label htmlFor="q40-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-false" value="FALSE" />
                  <Label htmlFor="q40-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-ng" value="NOT GIVEN" />
                  <Label htmlFor="q40-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge15ARTest2Questions;
