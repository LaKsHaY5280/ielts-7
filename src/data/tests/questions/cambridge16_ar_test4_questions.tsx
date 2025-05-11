// Cambridge 16 Academic Reading Test 4 - Questions
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

/**
 * Component that displays the questions for Cambridge 16 Academic Reading Test 4
 */
export const Cambridge16ARTest4Questions: React.FC = () => {
  return (
    <div className="reading-questions p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 1: Questions 1-13
      </h2>

      {/* Questions 1-5 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 1-5</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for
          each answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 1-5 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">Empathy in Babies</h4>
          <p className="mb-4">
            Babies learn about their social environment from an early age.
            Research has found that when babies are around 9 months old, they
            can cooperate with their <strong>1</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Babies
            over the age of 14 months show that they are also capable of working
            with people they do not know. According to Michael Tomasello,
            cooperation among humans is not a result of experience, but seems to
            be <strong>2</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>

          <p className="mb-4">
            The belief that young children are completely <strong>3</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> has been
            contradicted by this research. Tomasello says that we can cooperate
            with others because we can appreciate their <strong>4</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>

          <p className="mb-4">
            In an experiment, babies of 15 months watched an adult who was
            having difficulty opening a <strong>5</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Although
            these babies generally help others with simple tasks, this situation
            was unusual because the adult was not aware of needing help. Despite
            this, many of the babies offered assistance.
          </p>
        </div>
      </div>

      {/* Questions 6-9 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 6-9</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 6-9 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>6.</strong> Professor Frans de Waal suggests that
            </p>
            <RadioGroup name="question6" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q6-a" value="A" />
                <Label htmlFor="q6-a" className="ml-2">
                  A people might stop showing empathy in certain situations.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q6-b" value="B" />
                <Label htmlFor="q6-b" className="ml-2">
                  B people are more empathetic than we used to believe.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q6-c" value="C" />
                <Label htmlFor="q6-c" className="ml-2">
                  C some individuals are naturally less empathetic than others.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q6-d" value="D" />
                <Label htmlFor="q6-d" className="ml-2">
                  D empathy is less common in certain cultures.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>7.</strong> When discussing experiments using painful
              stimuli, the writer suggests that
            </p>
            <RadioGroup name="question7" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q7-a" value="A" />
                <Label htmlFor="q7-a" className="ml-2">
                  A humans need to be able to control their empathy in
                  emergencies.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q7-b" value="B" />
                <Label htmlFor="q7-b" className="ml-2">
                  B humans feel their own pain more strongly than they should.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q7-c" value="C" />
                <Label htmlFor="q7-c" className="ml-2">
                  C humans tend to exaggerate the pain experienced by others.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q7-d" value="D" />
                <Label htmlFor="q7-d" className="ml-2">
                  D humans have developed the ability to ignore their own pain.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>8.</strong> In the Netherlands study, the results of the
              brain scanning suggest that empathy
            </p>
            <RadioGroup name="question8" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q8-a" value="A" />
                <Label htmlFor="q8-a" className="ml-2">
                  A causes people to feel both emotional and physical pain.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q8-b" value="B" />
                <Label htmlFor="q8-b" className="ml-2">
                  B leads to a desire to take action.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q8-c" value="C" />
                <Label htmlFor="q8-c" className="ml-2">
                  C can be measured physically.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q8-d" value="D" />
                <Label htmlFor="q8-d" className="ml-2">
                  D is mainly experienced as a physical sensation.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>9.</strong> In the final paragraph, Dr Tania Singer says
              that
            </p>
            <RadioGroup name="question9" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q9-a" value="A" />
                <Label htmlFor="q9-a" className="ml-2">
                  A our understanding of certain emotions is still limited.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q9-b" value="B" />
                <Label htmlFor="q9-b" className="ml-2">
                  B empathy for pain is easier to study than empathy for other
                  emotions.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q9-c" value="C" />
                <Label htmlFor="q9-c" className="ml-2">
                  C brain responses to different types of suffering need further
                  research.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q9-d" value="D" />
                <Label htmlFor="q9-d" className="ml-2">
                  D empathic response is only activated in social situations.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 10-13 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 10-13</h3>
        <p className="mb-2">
          Do the following statements agree with the claims of the writer in
          Reading Passage 1?
        </p>
        <p className="mb-2">In boxes 10-13 on your answer sheet, write</p>
        <div className="mb-4">
          <p className="mb-1">
            <strong>YES</strong> if the statement agrees with the claims of the
            writer
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
              <strong>10.</strong> Babies over 14 months often respond in the
              same way to tasks they have already observed other people do.
            </p>
            <RadioGroup name="question10" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q10-yes" value="YES" />
                <Label htmlFor="q10-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q10-no" value="NO" />
                <Label htmlFor="q10-no" className="ml-2">
                  NO
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
              <strong>11.</strong> Before Tomasello's research, no explanation
              had been suggested for the human ability to cooperate.
            </p>
            <RadioGroup name="question11" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q11-yes" value="YES" />
                <Label htmlFor="q11-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q11-no" value="NO" />
                <Label htmlFor="q11-no" className="ml-2">
                  NO
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
              <strong>12.</strong> Neuroscience traditionally recognised that
              emotions were represented physically as well as mentally.
            </p>
            <RadioGroup name="question12" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q12-yes" value="YES" />
                <Label htmlFor="q12-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q12-no" value="NO" />
                <Label htmlFor="q12-no" className="ml-2">
                  NO
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
              <strong>13.</strong> Most scientists now accept Damasio's theory
              about the relationship between emotions and thoughts.
            </p>
            <RadioGroup name="question13" className="flex gap-8">
              <div className="flex items-center">
                <RadioGroupItem id="q13-yes" value="YES" />
                <Label htmlFor="q13-yes" className="ml-2">
                  YES
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q13-no" value="NO" />
                <Label htmlFor="q13-no" className="ml-2">
                  NO
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

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 2: Questions 14-27
      </h2>

      {/* Questions 14-20 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 14-20</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in
          Reading Passage 2?
        </p>
        <p className="mb-2">In boxes 14-20 on your answer sheet, write</p>
        <div className="mb-4">
          <p className="mb-1">
            <strong>TRUE</strong> if the statement agrees with the information
          </p>
          <p className="mb-1">
            <strong>FALSE</strong> if the statement contradicts the information
          </p>
          <p className="mb-1">
            <strong>NOT GIVEN</strong> if there is no information on this
          </p>
        </div>

        <div className="space-y-6">
          <div className="question-item">
            <p className="mb-3">
              <strong>14.</strong> William Herschel initially mistook Uranus for
              a comet.
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
              <strong>15.</strong> Uranus can always be seen without a
              telescope.
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
              <strong>16.</strong> Thomas Wright's ideas led to the discovery of
              Uranus.
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
              <strong>17.</strong> Ancient Greek and Chinese astronomers
              recorded seeing Uranus.
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
              <strong>18.</strong> The name 'Uranus' was chosen by William
              Herschel.
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
              <strong>19.</strong> Herschel received recognition for his
              discovery from the king.
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
              <strong>20.</strong> Uranus receives less light from the sun than
              Earth does.
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
        </div>
      </div>

      {/* Questions 21-27 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 21-27</h3>
        <p className="mb-2">Complete the summary below.</p>
        <p className="mb-2">
          Choose <strong>ONE WORD ONLY</strong> from the passage for each
          answer.
        </p>
        <p className="mb-4">
          Write your answers in boxes 21-27 on your answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">Uranus</h4>
          <p className="mb-4">
            Uranus has a blueish color because it has an outer layer of gas
            containing <strong>21</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, which
            absorbs light from the red part of the spectrum. The planet has been
            visited by just one spacecraft, called <strong>22</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, which took
            pictures showing a planet that was not visually interesting. Like
            several other planets, Uranus has <strong>23</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> surrounding
            it, though they're hard to see.
          </p>

          <p className="mb-4">
            Unlike other planets, Uranus has an extreme axis of rotation, which
            means it moves in a way similar to a <strong>24</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. Scientists
            now believe that this strange movement occurred because Uranus was
            hit by an <strong>25</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> of enormous
            size. This collision would have taken place soon after the{" "}
            <strong>26</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> was
            created.
          </p>

          <p className="mb-4">
            Scientists have suggested that we should send another unmanned
            mission to Uranus to learn more about the planet. However, there are
            issues such as the significant <strong>27</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> involved in
            such a project, which means that it is unlikely to happen soon.
          </p>
        </div>
      </div>

      <h2 className="text-lg font-bold mb-4">
        READING PASSAGE 3: Questions 28-40
      </h2>

      {/* Questions 28-34 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 28-34</h3>
        <p className="mb-2">
          Choose the correct letter, <strong>A</strong>, <strong>B</strong>,{" "}
          <strong>C</strong> or <strong>D</strong>.
        </p>
        <p className="mb-4">
          Write the correct letter in boxes 28-34 on your answer sheet.
        </p>

        <div className="space-y-8">
          <div className="question-item">
            <p className="mb-3">
              <strong>28.</strong> What does the writer find puzzling about
              laughter?
            </p>
            <RadioGroup name="question28" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q28-a" value="A" />
                <Label htmlFor="q28-a" className="ml-2">
                  A the contrast between its pleasant feeling and the physical
                  effects
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-b" value="B" />
                <Label htmlFor="q28-b" className="ml-2">
                  B the inconsistency between the muscles used and the emotions
                  experienced
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-c" value="C" />
                <Label htmlFor="q28-c" className="ml-2">
                  C the way it combines hypertension and physical pain
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q28-d" value="D" />
                <Label htmlFor="q28-d" className="ml-2">
                  D the frequency with which electrical stimulation is created
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>29.</strong> What was shown by Davila-Ross's work with
              chimpanzees?
            </p>
            <RadioGroup name="question29" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q29-a" value="A" />
                <Label htmlFor="q29-a" className="ml-2">
                  A The sounds they make when playing are similar to human
                  laughter.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-b" value="B" />
                <Label htmlFor="q29-b" className="ml-2">
                  B The evolution of laughter in humans was unrelated to their
                  sounds.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-c" value="C" />
                <Label htmlFor="q29-c" className="ml-2">
                  C Laughter-like sounds developed after the evolution of human
                  speech.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q29-d" value="D" />
                <Label htmlFor="q29-d" className="ml-2">
                  D They prefer playing when they hear laughter-like sounds from
                  their own species.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>30.</strong> According to Michael Owren, human laughter
              was modified when
            </p>
            <RadioGroup name="question30" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q30-a" value="A" />
                <Label htmlFor="q30-a" className="ml-2">
                  A humans began to walk upright and the brain grew larger.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-b" value="B" />
                <Label htmlFor="q30-b" className="ml-2">
                  B humans needed to signal emotions more clearly to others.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-c" value="C" />
                <Label htmlFor="q30-c" className="ml-2">
                  C humans developed a more sophisticated vocal mechanism.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q30-d" value="D" />
                <Label htmlFor="q30-d" className="ml-2">
                  D humans needed a more deliberate means of communication.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>31.</strong> According to Robert Provine, what is unusual
              about the way in which laughter affects us?
            </p>
            <RadioGroup name="question31" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q31-a" value="A" />
                <Label htmlFor="q31-a" className="ml-2">
                  A We have no control over it.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-b" value="B" />
                <Label htmlFor="q31-b" className="ml-2">
                  B It uses a different part of the brain from normal thought.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-c" value="C" />
                <Label htmlFor="q31-c" className="ml-2">
                  C It interferes with the functioning of our brain.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q31-d" value="D" />
                <Label htmlFor="q31-d" className="ml-2">
                  D It has physical effects that can persist for a long time.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>32.</strong> According to the passage, what is the
              significance of research on tickling?
            </p>
            <RadioGroup name="question32" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q32-a" value="A" />
                <Label htmlFor="q32-a" className="ml-2">
                  A It confirms the similarity of responses in humans and
                  primates.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-b" value="B" />
                <Label htmlFor="q32-b" className="ml-2">
                  B It emphasizes the importance of harmless play in evolution.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-c" value="C" />
                <Label htmlFor="q32-c" className="ml-2">
                  C It explains how laughter became a form of communication.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q32-d" value="D" />
                <Label htmlFor="q32-d" className="ml-2">
                  D It shows how tickling helps to develop relationships.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>33.</strong> Sophie Scott's brain-scan research shows that
              when people hear laughter, they
            </p>
            <RadioGroup name="question33" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q33-a" value="A" />
                <Label htmlFor="q33-a" className="ml-2">
                  A recognize the type of emotion being communicated.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-b" value="B" />
                <Label htmlFor="q33-b" className="ml-2">
                  B respond physically in a very quick time.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-c" value="C" />
                <Label htmlFor="q33-c" className="ml-2">
                  C try to interpret the social meaning.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q33-d" value="D" />
                <Label htmlFor="q33-d" className="ml-2">
                  D find it hard to concentrate on other tasks.
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="question-item">
            <p className="mb-3">
              <strong>34.</strong> What does Scott believe about 'emotional
              contagion'?
            </p>
            <RadioGroup name="question34" className="space-y-2">
              <div className="flex items-center">
                <RadioGroupItem id="q34-a" value="A" />
                <Label htmlFor="q34-a" className="ml-2">
                  A It has played a key role in language development.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-b" value="B" />
                <Label htmlFor="q34-b" className="ml-2">
                  B It is more commonly found in women than men.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-c" value="C" />
                <Label htmlFor="q34-c" className="ml-2">
                  C It can be either a cause or an effect of laughter.
                </Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem id="q34-d" value="D" />
                <Label htmlFor="q34-d" className="ml-2">
                  D Its role in human relationships is still not fully
                  understood.
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Questions 35-40 */}
      <div className="question-set mb-8">
        <h3 className="font-bold mb-2">Questions 35-40</h3>
        <p className="mb-2">
          Complete the summary using the list of words, <strong>A-J</strong>,
          below.
        </p>
        <p className="mb-4">
          Write the correct letter, <strong>A-J</strong>, in boxes 35-40 on your
          answer sheet.
        </p>

        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-bold mb-3">The Evolution of Laughter</h4>
          <p className="mb-4">
            The human brain has an ancient circuit used for laughter and a more
            recently evolved circuit in the <strong>35</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />, which is
            the region dealing with complex thought. When we laugh, the ancient
            circuit temporarily takes control, creating a type of minor{" "}
            <strong>36</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />.
          </p>

          <p className="mb-4">
            The evolution of the human brain may have been influenced by the
            emergence of social groups. According to Dr Paul MacLean, tracking
            various forms of <strong>37</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> was
            probably a major factor in brain development.
          </p>

          <p className="mb-4">
            Researchers have drawn a comparison between laughter and the act of{" "}
            <strong>38</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. In both,
            there is a pattern of apparent rejection followed by a desire for
            more, and both serve a similar social purpose, namely to enhance
            feelings of <strong>39</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" /> between
            individuals.
          </p>

          <p className="mb-4">
            Human laughter has a regular rhythm, with around four sounds per{" "}
            <strong>40</strong>{" "}
            <Input type="text" className="w-32 mx-1 inline-block" />. According
            to Dr Scott, it evolved into a sophisticated system for signaling
            our emotions to other people.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <p className="mb-1">
              <strong>A</strong> awareness
            </p>
            <p className="mb-1">
              <strong>B</strong> cerebral cortex
            </p>
            <p className="mb-1">
              <strong>C</strong> creativity
            </p>
            <p className="mb-1">
              <strong>D</strong> distance
            </p>
            <p className="mb-1">
              <strong>E</strong> emotion
            </p>
          </div>
          <div>
            <p className="mb-1">
              <strong>F</strong> seizure
            </p>
            <p className="mb-1">
              <strong>G</strong> second
            </p>
            <p className="mb-1">
              <strong>H</strong> tickling
            </p>
            <p className="mb-1">
              <strong>I</strong> time
            </p>
            <p className="mb-1">
              <strong>J</strong> trust
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cambridge16ARTest4Questions;
