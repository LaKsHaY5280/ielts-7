// Cambridge 14 Academic Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

/**
 * Component that displays the questions for Cambridge 14 Academic Reading Test 4
 */
export const Cambridge14ARTest4Questions: React.FC = () => {
  return (
    <>
      <div className="reading-questions p-4 bg-white">
        <h2 className="text-lg font-bold mb-4">
          READING PASSAGE 1: Questions 1-13
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 1-8</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 1-8</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">Ysabel Giraldo's research</h4>

            <p className="mb-2">
              – Focused on a total of <strong>1.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> different
              age groups of ants, analyzing
            </p>

            <p className="font-bold mt-3 mb-2">Behaviour:</p>
            <p className="mb-2">
              – how well ants looked after their <strong>2.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – their ability to locate <strong>3.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> using a
              scent trail
            </p>
            <p className="mb-2">
              – the effect that <strong>4.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> had on
              them
            </p>
            <p className="mb-2">
              – how <strong>5.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> they
              attacked prey
            </p>

            <p className="font-bold mt-3 mb-2">Brains:</p>
            <p className="mb-2">
              – comparison between age and the <strong>6.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of dying
              cells in the brains of ants
            </p>
            <p className="mb-2">
              – condition of synaptic complexes (areas in which{" "}
              <strong>7.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> meet) in
              the brain's 'mushroom bodies'
            </p>
            <p className="mb-2">
              – level of two <strong>8.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> in the
              brain associated with ageing
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 9-13</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 1?
          </p>
          <p className="mb-2">
            In <strong>boxes 9-13</strong> on your answer sheet, write
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
                <strong>9.</strong> Pheidole dentata ants are the only known
                animals which remain active for almost their whole lives.
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
                <strong>10.</strong> Ysabel Giraldo was the first person to
                study <em>Pheidole dentata</em> ants using precise data about
                the insects' ages.
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
                <strong>11.</strong> The ants in Giraldo's experiments behaved
                as she had predicted that they would.
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
                <strong>12.</strong> The recent studies of bees used different
                methods of measuring age-related decline.
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
                <strong>13.</strong> <em>Pheidole dentata</em> ants kept in
                laboratory conditions tend to live longer lives.
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
            Reading Passage 2 has six paragraphs, <strong>A-F</strong>.
          </p>
          <p className="mb-2">
            Which paragraph contains the following information?
          </p>
          <p className="mb-4">
            Write the correct letter, <strong>A-F</strong>, in boxes{" "}
            <strong>14-17</strong> on your answer sheet.
          </p>

          <div className="space-y-6">
            <div className="question-item">
              <p className="mb-3">
                <strong>14.</strong> a reference to how quickly animal species
                can die out
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
                <strong>15.</strong> reasons why it is preferable to study
                animals in captivity rather than in the wild
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
                <strong>16.</strong> mention of two ways of learning about
                animals other than visiting them in zoos
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
                <strong>17.</strong> reasons why animals in zoos may be
                healthier than those in the wild
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
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 2?
          </p>
          <p className="mb-2">
            In <strong>boxes 18-22</strong> on your answer sheet, write
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
                <strong>18.</strong> An animal is likely to live longer in a zoo
                than in the wild.
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
                <strong>19.</strong> There are some species in zoos which can no
                longer be found in the wild.
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

            <div className="question-item">
              <p className="mb-3">
                <strong>20.</strong> Improvements in the quality of TV wildlife
                documentaries have resulted in increased numbers of zoo
                visitors.
              </p>
              <RadioGroup name="question20" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q20-true" value="TRUE" />
                  <Label htmlFor="q20-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q20-false" value="FALSE" />
                  <Label htmlFor="q20-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q20-ng" value="NOT GIVEN" />
                  <Label htmlFor="q20-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>21.</strong> Zoos have always excelled at transmitting
                information about animals to the public.
              </p>
              <RadioGroup name="question21" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q21-true" value="TRUE" />
                  <Label htmlFor="q21-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q21-false" value="FALSE" />
                  <Label htmlFor="q21-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q21-ng" value="NOT GIVEN" />
                  <Label htmlFor="q21-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>22.</strong> Studying animals in zoos is less stressful
                for the animals than studying them in the wild.
              </p>
              <RadioGroup name="question22" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q22-true" value="TRUE" />
                  <Label htmlFor="q22-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q22-false" value="FALSE" />
                  <Label htmlFor="q22-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q22-ng" value="NOT GIVEN" />
                  <Label htmlFor="q22-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>
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
              Which TWO of the following are stated about zoo staff in the text?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q23-24-a" value="A" />
              <Label htmlFor="q23-24-a" className="ml-2">
                A Some take part in television documentaries about animals.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-b" value="B" />
              <Label htmlFor="q23-24-b" className="ml-2">
                B Some travel to overseas locations to join teams in zoos.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-c" value="C" />
              <Label htmlFor="q23-24-c" className="ml-2">
                C Some get experience with species in the wild before taking up
                zoo jobs.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-d" value="D" />
              <Label htmlFor="q23-24-d" className="ml-2">
                D Some teach people who are involved with conservation projects.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q23-24-e" value="E" />
              <Label htmlFor="q23-24-e" className="ml-2">
                E Some specialise in caring for species which are under threat.
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
              Which TWO of these beliefs about zoos does the writer mention in
              the text?
            </strong>
          </p>

          <div className="space-y-3">
            <div className="flex items-center">
              <Checkbox id="q25-26-a" value="A" />
              <Label htmlFor="q25-26-a" className="ml-2">
                A They can help children overcome their fears of wild animals.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-b" value="B" />
              <Label htmlFor="q25-26-b" className="ml-2">
                B They can increase public awareness of environmental issues.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-c" value="C" />
              <Label htmlFor="q25-26-c" className="ml-2">
                C They can provide employment for a range of professional
                people.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-d" value="D" />
              <Label htmlFor="q25-26-d" className="ml-2">
                D They can generate income to support wildlife conservation
                projects.
              </Label>
            </div>
            <div className="flex items-center">
              <Checkbox id="q25-26-e" value="E" />
              <Label htmlFor="q25-26-e" className="ml-2">
                E They can raise animals which can later be released into the
                wild.
              </Label>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-bold mb-4 mt-10">
          READING PASSAGE 3: Questions 27-40
        </h2>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 27-33</h3>
          <p className="mb-2">
            Do the following statements agree with the information given in
            Reading Passage 3?
          </p>
          <p className="mb-2">
            In <strong>boxes 27-33</strong> on your answer sheet, write
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
                <strong>27.</strong> Rochman and her colleagues were the first
                people to research the problem of marine debris.
              </p>
              <RadioGroup name="question27" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q27-true" value="TRUE" />
                  <Label htmlFor="q27-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-false" value="FALSE" />
                  <Label htmlFor="q27-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q27-ng" value="NOT GIVEN" />
                  <Label htmlFor="q27-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>28.</strong> The creatures most in danger from ocean
                trash are certain seabirds.
              </p>
              <RadioGroup name="question28" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q28-true" value="TRUE" />
                  <Label htmlFor="q28-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-false" value="FALSE" />
                  <Label htmlFor="q28-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q28-ng" value="NOT GIVEN" />
                  <Label htmlFor="q28-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>29.</strong> The studies Rochman has reviewed have
                already proved that populations of some birds will soon become
                extinct.
              </p>
              <RadioGroup name="question29" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q29-true" value="TRUE" />
                  <Label htmlFor="q29-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-false" value="FALSE" />
                  <Label htmlFor="q29-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q29-ng" value="NOT GIVEN" />
                  <Label htmlFor="q29-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>30.</strong> Rochman analysed papers on the different
                kinds of danger caused by ocean trash.
              </p>
              <RadioGroup name="question30" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q30-true" value="TRUE" />
                  <Label htmlFor="q30-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-false" value="FALSE" />
                  <Label htmlFor="q30-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q30-ng" value="NOT GIVEN" />
                  <Label htmlFor="q30-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>31.</strong> Most of the research analysed by Rochman
                and her colleagues was badly designed.
              </p>
              <RadioGroup name="question31" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q31-true" value="TRUE" />
                  <Label htmlFor="q31-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-false" value="FALSE" />
                  <Label htmlFor="q31-false" className="ml-2">
                    FALSE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q31-ng" value="NOT GIVEN" />
                  <Label htmlFor="q31-ng" className="ml-2">
                    NOT GIVEN
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="question-item">
              <p className="mb-3">
                <strong>32.</strong> One study examined by Rochman was expecting
                to find that mussels were harmed by eating plastic.
              </p>
              <RadioGroup name="question32" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q32-true" value="TRUE" />
                  <Label htmlFor="q32-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q32-false" value="FALSE" />
                  <Label htmlFor="q32-false" className="ml-2">
                    FALSE
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
                <strong>33.</strong> Some mussels choose to eat plastic in
                preference to their natural diet.
              </p>
              <RadioGroup name="question33" className="flex gap-8">
                <div className="flex items-center">
                  <RadioGroupItem id="q33-true" value="TRUE" />
                  <Label htmlFor="q33-true" className="ml-2">
                    TRUE
                  </Label>
                </div>
                <div className="flex items-center">
                  <RadioGroupItem id="q33-false" value="FALSE" />
                  <Label htmlFor="q33-false" className="ml-2">
                    FALSE
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
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Questions 34-39</h3>
          <p className="mb-2">Complete the notes below.</p>
          <p className="mb-2">
            Choose <strong>ONE WORD ONLY</strong> from the passage for each
            answer.
          </p>
          <p className="mb-4">
            Write your answers in <strong>boxes 34-39</strong> on your answer
            sheet.
          </p>

          <div className="mb-6">
            <h4 className="font-bold mb-2">
              Findings related to marine debris
            </h4>

            <p className="font-bold mt-3 mb-2">
              Studies of marine debris found the biggest threats were
            </p>
            <p className="mb-2">plastic (not metal or wood)</p>
            <p className="mb-2">
              – bits of debris that were <strong>34.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> (harmful
              to animals)
            </p>
            <p className="mb-2">
              – There was little research into <strong>35.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> e.g. from
              synthetic fibres.
            </p>

            <p className="font-bold mt-3 mb-2">
              Drawbacks of the studies examined
            </p>
            <p className="mb-2">
              – most of them focused on individual animals, not entire{" "}
              <strong>36.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" />
            </p>
            <p className="mb-2">
              – the <strong>37.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of
              plastic used in the lab did not always reflect those in the ocean
            </p>

            <p className="mb-2">there was insufficient information on</p>
            <p className="mb-2">– numbers of animals which could be affected</p>
            <p className="mb-2">
              – the impact of a reduction in numbers on the <strong>38.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> of that
              species
            </p>
            <p className="mb-2">– the impact on the ecosystem</p>

            <p className="mb-2">
              Rochman says more information is needed on the possible impact of
            </p>
            <p className="mb-2">
              – future <strong>39.</strong>{" "}
              <Input type="text" className="w-32 mx-1 inline-block" /> (e.g.
              involving oil).
            </p>
          </div>
        </div>

        <div className="question-set mb-8">
          <h3 className="font-bold mb-2">Question 40</h3>
          <p className="mb-2">
            Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
            <strong>C</strong> or <strong>D</strong>.
          </p>
          <p className="mb-4">
            Write the correct letter in <strong>box 40</strong> on your answer
            sheet.
          </p>

          <p className="mb-4">
            <strong>40. What would be the best title for this passage?</strong>
          </p>

          <RadioGroup name="question40" className="space-y-3">
            <div className="flex items-center">
              <RadioGroupItem id="q40-a" value="A" />
              <Label htmlFor="q40-a" className="ml-2">
                A Assessing the threat of marine debris
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem id="q40-b" value="B" />
              <Label htmlFor="q40-b" className="ml-2">
                B Marine debris: who is to blame?
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem id="q40-c" value="C" />
              <Label htmlFor="q40-c" className="ml-2">
                C A new solution to the problem of marine debris
              </Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem id="q40-d" value="D" />
              <Label htmlFor="q40-d" className="ml-2">
                D Marine debris: the need for international action
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </>
  );
};

export default Cambridge14ARTest4Questions;
