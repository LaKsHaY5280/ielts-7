// Cambridge 17 Academic Reading Test 2 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 17 Academic Reading Test 2
 */
export const Cambridge17ARTest2Questions: React.FC = () => {
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
            <h4 className="font-bold mb-2">The Dead Sea Scrolls</h4>

            <p className="font-bold mb-2">Discovery</p>
            <div className="question-item mb-4">
              <p className="mb-2">Qumran, 1946/7</p>
              <p className="mb-2">
                – three Bedouin shepherds in their teens were near an opening on
                side of cliff
              </p>
              <p className="mb-2">
                – heard a noise of breaking when one teenager threw a{" "}
                <strong>1.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
              <p className="mb-2">
                – teenagers went into the <strong>2.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" /> and
                found a number of containers made of <strong>3.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
            </div>

            <p className="font-bold mb-2">The scrolls</p>
            <div className="question-item mb-4">
              <p className="mb-2">– date from between 150 BCE and 70 CE</p>
              <p className="mb-2">
                – thought to have been written by group of people known as the{" "}
                <strong>4.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />
              </p>
              <p className="mb-2">
                – written mainly in the <strong>5.</strong>{" "}
                <Input type="text" className="w-32 mx-1 inline-block" />{" "}
                language
              </p>
              <p className="mb-2">
                – most are on religious topics, written using ink on parchment
                or papyrus
              </p>
            </div>
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

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>6.</strong> The Bedouin teenagers who found the scrolls
                were disappointed by how little money they received for them.
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
                <strong>7.</strong> There is agreement among academics about the
                origin of the Dead Sea Scrolls.
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

            <div className="question-item">
              <p className="mb-3">
                <strong>8.</strong> Most of the books of the Bible written on
                the scrolls are incomplete.
              </p>
              <RadioGroup name="question8" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q8-true" value="TRUE" />
                  <Label htmlFor="q8-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-false" value="FALSE" />
                  <Label htmlFor="q8-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-ng" value="NOT GIVEN" />
                  <Label htmlFor="q8-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> The information on the Copper Scroll is
                written in an unusual way.
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
                <strong>10.</strong> Mar Samuel was given some of the scrolls as
                a gift.
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
                <strong>11.</strong> In the early 1950s, a number of educational
                establishments in the US were keen to buy scrolls from Mar
                Samuel.
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
                <strong>12.</strong> The scroll that was pieced together in 2017
                contains information about annual occasions in the Qumran area
                2,000 years ago.
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
                <strong>13.</strong> Academics at the University of Haifa are
                currently researching how to decipher the final scroll.
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
          <h3 className="font-bold mb-2">Questions 14-18</h3>
          <p className="mb-2">
            Reading Passage 2 has five paragraphs, <strong>A-E</strong>.
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-E</strong>, in boxes 14-18 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> a reference to a type of tomato that can
                resist a dangerous infection
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>15.</strong> an explanation of how problems can arise
                from focusing only on a certain type of tomato plant
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>16.</strong> a number of examples of plants that are not
                cultivated at present but could be useful as food sources
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
                <strong>17.</strong> a comparison between the early
                domestication of the tomato and more recent research
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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

            <div className="question-item">
              <p className="mb-3">
                <strong>18.</strong> a personal reaction to the flavour of a
                tomato that has been genetically edited
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E"].map((letter) => (
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 19-23</h3>
          <p className="mb-2">
            Look at the following statements (Questions 19-23) and the list of
            researchers below.
          </p>
          <p className="mb-2">
            Match each statement with the correct researcher,{" "}
            <strong>A-D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-D</strong>, in boxes 19-23 on
            your answer sheet.
          </p>
          <p className="mb-4">
            <strong>NB</strong> You may use any letter more than once.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">List of Researchers</h4>
            <p>
              <strong>A</strong> Jorg Kudla
            </p>
            <p>
              <strong>B</strong> Caixia Gao
            </p>
            <p>
              <strong>C</strong> Joyce Van Eck
            </p>
            <p>
              <strong>D</strong> Jonathan Jones
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>19.</strong> Domestication of certain plants could allow
                them to adapt to future environmental challenges.
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D"].map((letter) => (
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
                <strong>20.</strong> The idea of growing and eating unusual
                plants may not be accepted on a large scale.
              </p>
              <RadioGroup name="question20" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D"].map((letter) => (
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

            <div className="question-item">
              <p className="mb-3">
                <strong>21.</strong> It is not advisable for the future
                direction of certain research to be made public.
              </p>
              <RadioGroup name="question21" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q21-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q21-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q21-${letter.toLowerCase()}`}
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
                <strong>22.</strong> Present efforts to domesticate one wild
                fruit are limited by the costs involved.
              </p>
              <RadioGroup name="question22" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q22-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q22-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q22-${letter.toLowerCase()}`}
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
                <strong>23.</strong> Humans only make use of a small proportion
                of the plant food available on Earth.
              </p>
              <RadioGroup name="question23" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D"].map((letter) => (
                  <div
                    className="flex items-center"
                    key={`q23-${letter.toLowerCase()}`}
                  >
                    <RadioGroupItem
                      id={`q23-${letter.toLowerCase()}`}
                      value={letter}
                    />
                    <Label
                      htmlFor={`q23-${letter.toLowerCase()}`}
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
          <h3 className="font-bold mb-2">Questions 24-26</h3>
          <p className="mb-2">Complete the sentences below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in boxes 24-26 on your answer sheet.
          </p>

          <div className="question-item mb-4">
            <p className="mb-2">
              <strong>24.</strong> An undesirable trait such as loss of{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> may be
              caused by a mutation in a tomato gene.
            </p>
          </div>

          <div className="question-item mb-4">
            <p className="mb-2">
              <strong>25.</strong> By modifying one gene in a tomato plant,
              researchers made the tomato three times its original{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
          </div>

          <div className="question-item mb-4">
            <p className="mb-2">
              <strong>26.</strong> A type of tomato which was not badly affected
              by <Input type="text" className="w-32 mx-1 inline-block" />, and
              was rich in vitamin C, was produced by a team of researchers in
              China.
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
            <strong>C</strong>, or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in boxes 27-31 on your answer sheet.
          </p>

          <div className="space-y-8">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> The purpose of the first paragraph is to
              </p>
              <RadioGroup name="question27" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-a" value="A" />
                  <Label htmlFor="q27-a" className="ml-2">
                    A defend particular ideas.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-b" value="B" />
                  <Label htmlFor="q27-b" className="ml-2">
                    B compare certain beliefs.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-c" value="C" />
                  <Label htmlFor="q27-c" className="ml-2">
                    C disprove a widely held view.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-d" value="D" />
                  <Label htmlFor="q27-d" className="ml-2">
                    D outline a common assumption.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> What are the writers doing in the second
                paragraph?
              </p>
              <RadioGroup name="question28" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-a" value="A" />
                  <Label htmlFor="q28-a" className="ml-2">
                    A criticising an opinion
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-b" value="B" />
                  <Label htmlFor="q28-b" className="ml-2">
                    B justifying a standpoint
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-c" value="C" />
                  <Label htmlFor="q28-c" className="ml-2">
                    C explaining an approach
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-d" value="D" />
                  <Label htmlFor="q28-d" className="ml-2">
                    D supporting an argument
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> In the third paragraph, what do the writers
                suggest about Darwin and Einstein?
              </p>
              <RadioGroup name="question29" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-a" value="A" />
                  <Label htmlFor="q29-a" className="ml-2">
                    A They represent an exception to a general rule.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-b" value="B" />
                  <Label htmlFor="q29-b" className="ml-2">
                    B Their way of working has been misunderstood.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-c" value="C" />
                  <Label htmlFor="q29-c" className="ml-2">
                    C They are an ideal which others should aspire to.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-d" value="D" />
                  <Label htmlFor="q29-d" className="ml-2">
                    D Their achievements deserve greater recognition.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> John Nicholson is an example of a person
                whose idea
              </p>
              <RadioGroup name="question30" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-a" value="A" />
                  <Label htmlFor="q30-a" className="ml-2">
                    A established his reputation as an influential scientist.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-b" value="B" />
                  <Label htmlFor="q30-b" className="ml-2">
                    B was only fully understood at a later point in history.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-c" value="C" />
                  <Label htmlFor="q30-c" className="ml-2">
                    C laid the foundations for someone else's breakthrough.
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-d" value="D" />
                  <Label htmlFor="q30-d" className="ml-2">
                    D initially met with scepticism from the scientific
                    community.
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> What is the key point of interest about the
                'acey-deucy' stirrup placement?
              </p>
              <RadioGroup name="question31" className="space-y-2">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-a" value="A" />
                  <Label htmlFor="q31-a" className="ml-2">
                    A the simple reason why it was invented
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-b" value="B" />
                  <Label htmlFor="q31-b" className="ml-2">
                    B the enthusiasm with which it was adopted
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-c" value="C" />
                  <Label htmlFor="q31-c" className="ml-2">
                    C the research that went into its development
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-d" value="D" />
                  <Label htmlFor="q31-d" className="ml-2">
                    D the cleverness of the person who first used it
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">In boxes 32-36 on your answer sheet, write</p>
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
                <strong>32.</strong> Acknowledging people such as Plato or da
                Vinci as geniuses will help us understand the process by which
                great minds create new ideas.
              </p>
              <RadioGroup name="question32" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-yes" value="YES" />
                  <Label htmlFor="q32-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-no" value="NO" />
                  <Label htmlFor="q32-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-ng" value="NOT GIVEN" />
                  <Label htmlFor="q32-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>33.</strong> The Law of Effect was discovered at a time
                when psychologists were seeking a scientific reason why
                creativity occurs.
              </p>
              <RadioGroup name="question33" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-yes" value="YES" />
                  <Label htmlFor="q33-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-no" value="NO" />
                  <Label htmlFor="q33-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-ng" value="NOT GIVEN" />
                  <Label htmlFor="q33-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>34.</strong> The Law of Effect states that no planning
                is involved in the behaviour of organisms.
              </p>
              <RadioGroup name="question34" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q34-yes" value="YES" />
                  <Label htmlFor="q34-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-no" value="NO" />
                  <Label htmlFor="q34-no" className="ml-2">
                    NO
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q34-ng" value="NOT GIVEN" />
                  <Label htmlFor="q34-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>35.</strong> The Law of Effect sets out clear
                explanations about the sources of new ideas and behaviours.
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
                <strong>36.</strong> Many scientists are now turning away from
                the notion of intelligent design and genius.
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 37-40</h3>
          <p className="mb-2">
            Complete the summary using the list of words, <strong>A-G</strong>,
            below.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in boxes 37-40 on
            your answer sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              The origins of creative behaviour
            </h4>

            <p className="mb-4">
              The traditional view of scientific discovery is that breakthroughs
              happen when a single great mind has sudden <strong>37.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Although
              this can occur, it is not often the case. Advances are more likely
              to be the result of a longer process. In some cases, this process
              involves <strong>38.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, such as
              Nicholson's theory about proto-elements. In others, simple
              necessity may provoke innovation, as with Westrope's decision to
              modify the position of his riding stirrups. There is also often an
              element of <strong>39.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />, for
              example, the coincidence of ideas that led to the invention of the
              Post-It note. With both the Law of Natural Selection and the Law
              of Effect, there may be no clear <strong>40.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> involved,
              but merely a process of variation and selection.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <p>
                <strong>A</strong> invention
              </p>
              <p>
                <strong>B</strong> goals
              </p>
              <p>
                <strong>C</strong> compromise
              </p>
              <p>
                <strong>D</strong> mistakes
              </p>
              <p>
                <strong>E</strong> luck
              </p>
              <p>
                <strong>F</strong> inspiration
              </p>
              <p>
                <strong>G</strong> experiments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge17ARTest2Questions;
