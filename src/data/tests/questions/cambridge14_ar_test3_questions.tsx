// Cambridge 14 Academic Reading Test 3 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 14 Academic Reading Test 3
 */
export const Cambridge14ARTest3Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-3</h3>
          <p className="mb-2">
            Reading Passage 1 has ten sections, <strong>A-J</strong>
          </p>
          <p className="mb-2">
            Which section contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-J</strong>, in{" "}
            <strong>boxes 1-3</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>1.</strong> information about how non-scientists'
                assumptions about intelligence influence their behavior towards
                others
              </p>
              <RadioGroup name="question1" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
                    <div key={`q1-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q1-${letter}`} value={letter} />
                      <Label htmlFor={`q1-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>2.</strong> a reference to lack of clarity over the
                definition of intelligence
              </p>
              <RadioGroup name="question2" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
                    <div key={`q2-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q2-${letter}`} value={letter} />
                      <Label htmlFor={`q2-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>3.</strong> the point that a researcher's implicit and
                explicit theories may be very different
              </p>
              <RadioGroup name="question3" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"].map(
                  (letter) => (
                    <div key={`q3-${letter}`} className="flex items-center">
                      <RadioGroupItem id={`q3-${letter}`} value={letter} />
                      <Label htmlFor={`q3-${letter}`} className="ml-2">
                        {letter}
                      </Label>
                    </div>
                  )
                )}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 4-6</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 1
          </p>
          <p className="mb-2">
            In <strong>boxes 4-6</strong> on your answer sheet, write
          </p>
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
                <strong>4.</strong> Slow language development in children is
                likely to prove disappointing to their parents.
              </p>
              <RadioGroup name="question4" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q4-yes" value="YES" />
                  <Label htmlFor="q4-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q4-no" value="NO" />
                  <Label htmlFor="q4-no" className="ml-2">
                    NO
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
                <strong>5.</strong> People's expectations of what children
                should gain from education are universal.
              </p>
              <RadioGroup name="question5" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q5-yes" value="YES" />
                  <Label htmlFor="q5-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q5-no" value="NO" />
                  <Label htmlFor="q5-no" className="ml-2">
                    NO
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
                <strong>6.</strong> Scholars may discuss theories without fully
                understanding each other.
              </p>
              <RadioGroup name="question6" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q6-yes" value="YES" />
                  <Label htmlFor="q6-yes" className="ml-2">
                    YES
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q6-no" value="NO" />
                  <Label htmlFor="q6-no" className="ml-2">
                    NO
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 7-13</h3>
          <p className="mb-2">
            Look at the following statements (Questions <strong>7-13</strong>)
            and the list of theories below.
          </p>
          <p className="mb-2">
            Match each statement with the correct theory, <strong>A</strong>,{" "}
            <strong>B</strong> or <strong>C</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A</strong>, <strong>B</strong> or{" "}
            <strong>C</strong>, in <strong>boxes 7-13</strong> on your answer
            sheet.
          </p>

          <div className="mb-4">
            <p className="mb-1">
              <strong>List of Theories</strong>
            </p>
            <p className="mb-1">
              <strong>A</strong> Hamiltonian
            </p>
            <p className="mb-1">
              <strong>B</strong> Jeffersonian
            </p>
            <p className="mb-1">
              <strong>C</strong> Jacksonian
            </p>
            <p className="mb-1">
              <strong>NB</strong> You may use any letter more than once.
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>7.</strong> It is desirable for the same possibilities
                to be open to everyone.
              </p>
              <RadioGroup name="question7" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q7-a" value="A" />
                  <Label htmlFor="q7-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-b" value="B" />
                  <Label htmlFor="q7-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q7-c" value="C" />
                  <Label htmlFor="q7-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>8.</strong> No section of society should have
                preferential treatment at the expense of another.
              </p>
              <RadioGroup name="question8" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q8-a" value="A" />
                  <Label htmlFor="q8-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-b" value="B" />
                  <Label htmlFor="q8-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q8-c" value="C" />
                  <Label htmlFor="q8-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>9.</strong> People should only gain benefits on the
                basis of what they actually achieve.
              </p>
              <RadioGroup name="question9" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q9-a" value="A" />
                  <Label htmlFor="q9-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-b" value="B" />
                  <Label htmlFor="q9-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q9-c" value="C" />
                  <Label htmlFor="q9-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>10.</strong> Variation in intelligence begins at birth.
              </p>
              <RadioGroup name="question10" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q10-a" value="A" />
                  <Label htmlFor="q10-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-b" value="B" />
                  <Label htmlFor="q10-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q10-c" value="C" />
                  <Label htmlFor="q10-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>11.</strong> The more intelligent people should be in
                positions of power.
              </p>
              <RadioGroup name="question11" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q11-a" value="A" />
                  <Label htmlFor="q11-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-b" value="B" />
                  <Label htmlFor="q11-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q11-c" value="C" />
                  <Label htmlFor="q11-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>12.</strong> Everyone can develop the same abilities.
              </p>
              <RadioGroup name="question12" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q12-a" value="A" />
                  <Label htmlFor="q12-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-b" value="B" />
                  <Label htmlFor="q12-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q12-c" value="C" />
                  <Label htmlFor="q12-c" className="ml-2">
                    C
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>13.</strong> People of low intelligence are likely to
                lead uncontrolled lives.
              </p>
              <RadioGroup name="question13" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q13-a" value="A" />
                  <Label htmlFor="q13-a" className="ml-2">
                    A
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-b" value="B" />
                  <Label htmlFor="q13-b" className="ml-2">
                    B
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q13-c" value="C" />
                  <Label htmlFor="q13-c" className="ml-2">
                    C
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
          <h3 className="font-bold mb-2">Questions 14-20</h3>
          <p className="mb-2">
            Reading Passage 2 has nine paragraphs, <strong>A-I</strong>
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-I</strong>, in{" "}
            <strong>boxes 14-20</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> mention of factors driving a renewed
                interest in natural medicinal compounds
              </p>
              <RadioGroup name="question14" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
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
                <strong>15.</strong> how recent technological advances have made
                insect research easier
              </p>
              <RadioGroup name="question15" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
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
                <strong>16.</strong> examples of animals which use medicinal
                substances from nature
              </p>
              <RadioGroup name="question16" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
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
                <strong>17.</strong> reasons why it is challenging to use
                insects in drug research
              </p>
              <RadioGroup name="question17" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
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
                <strong>18.</strong> reference to how interest in drug research
                may benefit wildlife
              </p>
              <RadioGroup name="question18" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q18-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q18-${letter}`} value={letter} />
                    <Label htmlFor={`q18-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>19.</strong> a reason why nature-based medicines fell
                out of favour for a period
              </p>
              <RadioGroup name="question19" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q19-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q19-${letter}`} value={letter} />
                    <Label htmlFor={`q19-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>20.</strong> an example of an insect-derived medicine in
                use at the moment
              </p>
              <RadioGroup name="question20" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G", "H", "I"].map((letter) => (
                  <div key={`q20-${letter}`} className="flex items-center">
                    <RadioGroupItem id={`q20-${letter}`} value={letter} />
                    <Label htmlFor={`q20-${letter}`} className="ml-2">
                      {letter}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 21-22</h3>
          <p className="mb-2">
            Choose <strong>TWO</strong> letters, <strong>A-E</strong>
          </p>
          <p className="mb-4">
            Write the correct letters in <strong>boxes 21-22</strong> on your
            answer sheet.
          </p>

          <p className="mb-4">
            <strong>
              Which TWO of the following make insects interesting for drug
              research?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q21-22-a" value="A" />
              <Label htmlFor="q21-22-a" className="ml-2">
                A the huge number of individual insects in the world
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-b" value="B" />
              <Label htmlFor="q21-22-b" className="ml-2">
                B the variety of substances insects have developed to protect
                themselves
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-c" value="C" />
              <Label htmlFor="q21-22-c" className="ml-2">
                C the potential to extract and make use of insects' genetic
                codes
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-d" value="D" />
              <Label htmlFor="q21-22-d" className="ml-2">
                D the similarities between different species of insect
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q21-22-e" value="E" />
              <Label htmlFor="q21-22-e" className="ml-2">
                E the manageable size of most insects
              </Label>
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
            Write your answers in <strong>boxes 23-26</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Research at Aberystwyth University
            </h4>

            <p className="mb-4">
              Ross Piper and fellow zoologists at Aberystwyth University are
              using their expertise in <strong>23</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> when
              undertaking bioprospecting with insects. They are especially
              interested in the compounds that insects produce to overpower and
              preserve their <strong>24</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. They are
              also interested in compounds which insects use to protect
              themselves from pathogenic bacteria and fungi found in their{" "}
              <strong>25</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />. Piper
              hopes that these substances will be useful in the development of
              drugs such as <strong>26</strong>{" "}
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
            Look at the following statements (<strong>Questions 27-31</strong>)
            and the list of researchers below.
          </p>
          <p className="mb-2">
            Match each statement with the correct researcher,{" "}
            <strong>A-G</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-G</strong>, in{" "}
            <strong>boxes 27-31</strong> on your answer sheet.
          </p>

          <div className="mb-6">
            <p className="mb-1">
              <strong>A</strong> Elkind
            </p>
            <p className="mb-1">
              <strong>B</strong> Miller and Almon
            </p>
            <p className="mb-1">
              <strong>C</strong> Rubin et al.
            </p>
            <p className="mb-1">
              <strong>D</strong> Stuart Brown
            </p>
            <p className="mb-1">
              <strong>E</strong> Pellegrini
            </p>
            <p className="mb-1">
              <strong>F</strong> Joan Goodman
            </p>
            <p className="mb-1">
              <strong>G</strong> Hirsch-Pasek et al.
            </p>
          </div>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>27.</strong> Play can be divided into a number of
                separate categories.
              </p>
              <RadioGroup name="question27" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
              <p className="mb-3">
                <strong>28.</strong> Adults' intended goals affect how they play
                with children.
              </p>
              <RadioGroup name="question28" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
              <p className="mb-3">
                <strong>29.</strong> Combining work with play may be the best
                way for children to learn.
              </p>
              <RadioGroup name="question29" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
              <p className="mb-3">
                <strong>30.</strong> Certain elements of play are more
                significant than others.
              </p>
              <RadioGroup name="question30" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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
              <p className="mb-3">
                <strong>31.</strong> Activities can be classified on a scale of
                playfulness.
              </p>
              <RadioGroup name="question31" className="flex flex-wrap gap-4">
                {["A", "B", "C", "D", "E", "F", "G"].map((letter) => (
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

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 32-36</h3>
          <p className="mb-2">
            Do the following statements agree with the claims of the writer in
            Reading Passage 3?
          </p>
          <p className="mb-2">
            In <strong>boxes 32-36</strong> on your answer sheet, write
          </p>
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
                <strong>32.</strong> Children need toys in order to play.
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
                <strong>33.</strong> Children's play has long been undervalued.
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
                <strong>34.</strong> Play helps children to develop their
                artistic talents.
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
                <strong>35.</strong> Researchers have agreed on a definition of
                play.
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
                <strong>36.</strong> Work and play differ in terms of whether or
                not they have a target.
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
          <p className="mb-2">Complete the summary below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 37-40</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Guided play</h4>

            <p className="mb-4">
              In the simplest form of guided play, an adult contributes to the
              environment in which the child is playing. Alternatively, an adult
              can play with a child and develop the play, for instance by{" "}
              <strong>37</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> the child
              to investigate different aspects of their game. Adults can help
              children to learn through play, and may make the activity rather
              structured, but it should still be based on the child's{" "}
              <strong>38</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> to play.
              Play without the intervention of adults gives children real{" "}
              <strong>39</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />; with
              adults, play can be <strong>40</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> at
              particular goals. However, all forms of play should be an
              opportunity for children to have fun.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cambridge14ARTest3Questions;
