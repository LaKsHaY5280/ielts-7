// Cambridge 15 Academic Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 15 Academic Reading Test 3
 */
const Cambridge15ARTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-7</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1.</strong> On leaving school, Moore did what his father
                wanted him to do.
              </p>
              <RadioGroup name="question1" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q1-true" value="TRUE" />
                  <Label htmlFor="q1-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-false" value="FALSE" />
                  <Label htmlFor="q1-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q1-ng" value="NOT GIVEN" />
                  <Label htmlFor="q1-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2.</strong> Moore began studying sculpture in his first
                term at the Leeds School of Art.
              </p>
              <RadioGroup name="question2" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q2-true" value="TRUE" />
                  <Label htmlFor="q2-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-false" value="FALSE" />
                  <Label htmlFor="q2-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q2-ng" value="NOT GIVEN" />
                  <Label htmlFor="q2-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3.</strong> When Moore started at the Royal College of
                Art, its reputation for teaching sculpture was excellent.
              </p>
              <RadioGroup name="question3" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q3-true" value="TRUE" />
                  <Label htmlFor="q3-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-false" value="FALSE" />
                  <Label htmlFor="q3-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q3-ng" value="NOT GIVEN" />
                  <Label htmlFor="q3-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>4.</strong> Moore became aware of ancient sculpture as a
                result of visiting London museums.
              </p>
              <RadioGroup name="question4" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q4-true" value="TRUE" />
                  <Label htmlFor="q4-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-false" value="FALSE" />
                  <Label htmlFor="q4-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-ng" value="NOT GIVEN" />
                  <Label htmlFor="q4-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>5.</strong> The Trocadero Museum's Mayan sculpture
                attracted a lot of public interest.
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
                <strong>6.</strong> Moore thought the Mayan sculpture was
                similar in certain respects to other stone sculptures.
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
                <strong>7.</strong> The artists who belonged to Unit One wanted
                to make modern art and architecture more popular.
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
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 8-13 on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Moore's career as an artist</h4>
            <p className="font-bold mb-2">1930s</p>
            <p className="mb-2">
              – Moore's exhibition at the Leicester Galleries is criticised by
              the press
            </p>
            <p className="mb-2">
              – Moore is urged to offer his <strong>8</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> and leave
              the Royal College.
            </p>

            <p className="font-bold mb-2 mt-4">1940s</p>
            <p className="mb-2">
              – Moore turns to drawing because <strong>9</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> for
              sculpting are not readily available
            </p>
            <p className="mb-2">
              – While visiting his hometown, Moore does some drawings of{" "}
              <strong>10</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – Moore is employed to produce a sculpture of a{" "}
              <strong>11</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – <strong>12</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> start to
              buy Moore's work
            </p>
            <p className="mb-2">
              – Moore's increased <strong>13</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> makes it
              possible for him to do more ambitious sculptures
            </p>

            <p className="font-bold mb-2 mt-4">1950s</p>
            <p className="mb-2">
              – Moore's series of bronze figures marks a further change in his
              style
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 2: Questions 14-26
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 14-20</h3>
          <p className="mb-2">
            Reading Passage 2 has seven paragraphs, <strong>A-G</strong>.
          </p>
          <p className="mb-2">
            Choose the correct heading for each section from the list of
            headings below.
          </p>
          <p className="mb-4">
            Write the correct number, <strong>i-x</strong>, in boxes{" "}
            <strong>14-20</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of Headings</h4>
            <p className="mb-1">
              <strong>i</strong> Getting the finance for production
            </p>
            <p className="mb-1">
              <strong>ii</strong> An unexpected benefit
            </p>
            <p className="mb-1">
              <strong>iii</strong> From initial inspiration to new product
            </p>
            <p className="mb-1">
              <strong>iv</strong> The range of potential customers for the
              device
            </p>
            <p className="mb-1">
              <strong>v</strong> What makes the device different from
              alternatives
            </p>
            <p className="mb-1">
              <strong>vi</strong> Cleaning water from a range of sources
            </p>
            <p className="mb-1">
              <strong>vii</strong> Overcoming production difficulties
            </p>
            <p className="mb-1">
              <strong>viii</strong> Profit not the primary goal
            </p>
            <p className="mb-1">
              <strong>ix</strong> A warm welcome for the device
            </p>
            <p className="mb-1">
              <strong>x</strong> The number of people affected by water
              shortages
            </p>
          </div>

          <div className="space-y-4">
            <div className="question-item">
              <p className="mb-2">
                <strong>14.</strong> Section A
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q14-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q14-${num}`} value={`${num}`} />
                    <Label htmlFor={`q14-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>15.</strong> Section B
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q15-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q15-${num}`} value={`${num}`} />
                    <Label htmlFor={`q15-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>16.</strong> Section C
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q16-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q16-${num}`} value={`${num}`} />
                    <Label htmlFor={`q16-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>17.</strong> Section D
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q17-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q17-${num}`} value={`${num}`} />
                    <Label htmlFor={`q17-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>18.</strong> Section E
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q18-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q18-${num}`} value={`${num}`} />
                    <Label htmlFor={`q18-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>19.</strong> Section F
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q19-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q19-${num}`} value={`${num}`} />
                    <Label htmlFor={`q19-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-2">
                <strong>20.</strong> Section G
              </p>
              <RadioGroup name="question20" className="flex flex-wrap gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                  <div key={`q20-${num}`} className="flex items-center">
                    <RadioGroupItem id={`q20-${num}`} value={`${num}`} />
                    <Label htmlFor={`q20-${num}`} className="ml-2">
                      {
                        [
                          "i",
                          "ii",
                          "iii",
                          "iv",
                          "v",
                          "vi",
                          "vii",
                          "viii",
                          "ix",
                          "x",
                        ][num - 1]
                      }
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
            <h4 className="font-bold mb-2">How the Desolenator works</h4>
            <p className="mb-4">
              The energy required to operate the Desolenator comes from
              sunlight. The device can be used in different locations, as it has{" "}
              <strong>21</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Water is
              fed into a pipe, and a <strong>22</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of water
              flows over a solar panel. The water then enters a boiler, where it
              turns into steam. Any particles in the water are caught in a{" "}
              <strong>23</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. The
              purified water comes out through one tube, and all types of{" "}
              <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> come out
              through another. A screen displays the <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of the
              device, and transmits the information to the company so that they
              know when the Desolenator requires <strong>26</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-31</h3>
          <p className="mb-2">
            Complete each sentence with the correct ending, <strong>A-F</strong>
            , below.
          </p>
          <p className="mb-2">
            Write the correct letter, <strong>A-F</strong>, in boxes{" "}
            <strong>27-31</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <p className="mb-1">
              <strong>A</strong> may be provided through methods used in
              biological research.
            </p>
            <p className="mb-1">
              <strong>B</strong> are the reason for their survival.
            </p>
            <p className="mb-1">
              <strong>C</strong> show considerable global variation.
            </p>
            <p className="mb-1">
              <strong>D</strong> contain animals which transform to become
              humans.
            </p>
            <p className="mb-1">
              <strong>E</strong> were originally spoken rather than written.
            </p>
            <p className="mb-1">
              <strong>F</strong> have been developed without factual basis.
            </p>

            <div className="mt-4 space-y-4">
              <div className="question-item">
                <p className="mb-2">
                  <strong>27.</strong> In fairy tales, details of the plot
                </p>
                <RadioGroup name="question27" className="flex gap-4">
                  {["A", "B", "C", "D", "E", "F"].map((letter) => (
                    <div key={`q27-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q27-${letter}`} value={letter} />
                      <Label htmlFor={`q27-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-2">
                  <strong>28.</strong> Tehrani rejects the idea that the useful
                  lessons for life in fairy tales
                </p>
                <RadioGroup name="question28" className="flex gap-4">
                  {["A", "B", "C", "D", "E", "F"].map((letter) => (
                    <div key={`q28-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q28-${letter}`} value={letter} />
                      <Label htmlFor={`q28-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-2">
                  <strong>29.</strong> Various theories about the social
                  significance of fairy tales
                </p>
                <RadioGroup name="question29" className="flex gap-4">
                  {["A", "B", "C", "D", "E", "F"].map((letter) => (
                    <div key={`q29-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q29-${letter}`} value={letter} />
                      <Label htmlFor={`q29-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-2">
                  <strong>30.</strong> Insights into the development of fairy
                  tales
                </p>
                <RadioGroup name="question30" className="flex gap-4">
                  {["A", "B", "C", "D", "E", "F"].map((letter) => (
                    <div key={`q30-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q30-${letter}`} value={letter} />
                      <Label htmlFor={`q30-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="question-item">
                <p className="mb-2">
                  <strong>31.</strong> All the fairy tales analysed by Tehrani
                </p>
                <RadioGroup name="question31" className="flex gap-4">
                  {["A", "B", "C", "D", "E", "F"].map((letter) => (
                    <div key={`q31-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q31-${letter}`} value={letter} />
                      <Label htmlFor={`q31-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            Complete the summary using the list of words, <strong>A-I</strong>,
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-I</strong>, in boxes{" "}
            <strong>32-36</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Phylogenetic analysis of Little Red Riding Hood
            </h4>
            <p className="mb-4">
              Tehrani used techniques from evolutionary biology to find out if{" "}
              <strong>32</strong>{" "}
              <Input type="text" className="w-12 mx-1 inline-block" /> existed
              among 58 stories from around the world. He also wanted to know
              which aspects of the stories had fewest <strong>33</strong>{" "}
              <Input type="text" className="w-12 mx-1 inline-block" />, as he
              believed these aspects would be the most important ones. Contrary
              to other beliefs, he found that some <strong>34</strong>{" "}
              <Input type="text" className="w-12 mx-1 inline-block" /> that were
              included in a story tended to change over time, and that the
              middle of a story seemed no more important than the other parts.
              He was also surprised that parts of a story which seemed to
              provide some sort of <strong>35</strong>{" "}
              <Input type="text" className="w-12 mx-1 inline-block" /> were
              unimportant. The aspect that he found most important in a story's
              survival was <strong>36</strong>{" "}
              <Input type="text" className="w-12 mx-1 inline-block" />
            </p>
            <div className="grid grid-cols-3 gap-4">
              <p className="mb-1">
                <strong>A</strong> ending
              </p>
              <p className="mb-1">
                <strong>B</strong> events
              </p>
              <p className="mb-1">
                <strong>C</strong> warning
              </p>
              <p className="mb-1">
                <strong>D</strong> links
              </p>
              <p className="mb-1">
                <strong>E</strong> records
              </p>
              <p className="mb-1">
                <strong>F</strong> variations
              </p>
              <p className="mb-1">
                <strong>G</strong> horror
              </p>
              <p className="mb-1">
                <strong>H</strong> people
              </p>
              <p className="mb-1">
                <strong>I</strong> plot
              </p>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 37-40 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>37.</strong> What method did Jamie Tehrani use to test
                his ideas about fairy tales?
              </p>
              <RadioGroup name="question37" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q37-a" value="A" />
                  <Label htmlFor="q37-a" className="ml-2">
                    A He compared oral and written forms of the same stories.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-b" value="B" />
                  <Label htmlFor="q37-b" className="ml-2">
                    B He looked at many different forms of the same basic story.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-c" value="C" />
                  <Label htmlFor="q37-c" className="ml-2">
                    C He looked at unrelated stories from many different
                    countries.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q37-d" value="D" />
                  <Label htmlFor="q37-d" className="ml-2">
                    D He contrasted the development of fairy tales with that of
                    living creatures.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>38.</strong> When discussing Tehrani's views, Jack Zipes
                suggests that
              </p>
              <RadioGroup name="question38" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q38-a" value="A" />
                  <Label htmlFor="q38-a" className="ml-2">
                    A Tehrani ignores key changes in the role of women.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-b" value="B" />
                  <Label htmlFor="q38-b" className="ml-2">
                    B stories which are too horrific are not always taken
                    seriously.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-c" value="C" />
                  <Label htmlFor="q38-c" className="ml-2">
                    C Tehrani overemphasises the importance of violence in
                    stories.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q38-d" value="D" />
                  <Label htmlFor="q38-d" className="ml-2">
                    D features of stories only survive if they have a deeper
                    significance.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>39.</strong> Why does Tehrani refer to Chinese and
                Japanese fairy tales?
              </p>
              <RadioGroup name="question39" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q39-a" value="A" />
                  <Label htmlFor="q39-a" className="ml-2">
                    A to indicate that Jack Zipes' theory is incorrect
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-b" value="B" />
                  <Label htmlFor="q39-b" className="ml-2">
                    B to suggest that crime is a global problem
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-c" value="C" />
                  <Label htmlFor="q39-c" className="ml-2">
                    C to imply that all fairy tales have a similar meaning
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q39-d" value="D" />
                  <Label htmlFor="q39-d" className="ml-2">
                    D to add more evidence for Jack Zipes' ideas
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>40.</strong> What does Mathias Clasen believe about
                fairy tales?
              </p>
              <RadioGroup name="question40" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q40-a" value="A" />
                  <Label htmlFor="q40-a" className="ml-2">
                    A They are a safe way of learning to deal with fear.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-b" value="B" />
                  <Label htmlFor="q40-b" className="ml-2">
                    B They are a type of entertainment that some people avoid.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-c" value="C" />
                  <Label htmlFor="q40-c" className="ml-2">
                    C They reflect the changing values of our society.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q40-d" value="D" />
                  <Label htmlFor="q40-d" className="ml-2">
                    D They reduce our ability to deal with real-world problems.
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

export { Cambridge15ARTest3Questions };
export default Cambridge15ARTest3Questions;
