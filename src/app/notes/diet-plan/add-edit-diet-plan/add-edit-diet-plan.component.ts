import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-diet-plan',
  templateUrl: './add-edit-diet-plan.component.html',
  styleUrls: ['./add-edit-diet-plan.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddEditDietPlanComponent implements OnInit {
  isEditable = [true, true, true, true];
  isnutrientEditable = [true, true, true];
  isGeneral: boolean = true;
  minDate: any = new Date();
  notes = [
    'General',
    'The mediterranean diet',
    'The DASH diet',
    'Plant-based and flexitarian diet',
  ];
  plansFieldNames = [
    {
      name: 'Nutritional Information',
      formControlName: 'nutrients',
      nutrients: [
        { name: 'Calories', formControlName: 'calories' },
        { name: 'Protein', formControlName: 'protein' },
        { name: 'Fat', formControlName: 'fat' },
      ],
    },
    { name: 'Breakfast', formControlName: 'breakfast' },
    {
      name: 'Lunch',
      formControlName: 'lunch',
    },
    {
      name: 'Dinner',
      formControlName: 'dinner',
    },
  ];
  planForms: any;
  generalForm: any;
  headerForm: any;
  team: boolean = false;
  isDisable: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.headerForm = this.fb.group({
      noteType: ['General'],
      title: [],
      validity: [new Date()],
    });
    this.planForms = this.fb.group({
      nutrients: this.fb.group({
        calories: ['1500 Calories'],
        protein: ['5 gm Protein'],
        fat: ['3 gm Fat'],
      }),
      breakfast: [
        'Start the day with this flavorful and vibrant Shakshuka recipe, known as a staple breakfast dish throughout the Middle East. Serve with 2 slices of sprouted grain bread.',
      ],
      lunch: [
        "In a bowl, combine 7.5 ounces (half a 15-ounce can) canned chickpeas (rinse in a colander for two minutes to remove excess sodium and drain well; save other half for tomorrow's snack), 2 teaspoons olive oil, 1/4 cup chopped white onion, 1/4 cup chopped green pepper (save the rest of the onion and pepper for dinner), 1 tablespoon sliced black olives, 1/4 teaspoon ground black pepper, and 1.5 tablespoons white vinegar. Mix thoroughly. Serve mixture over 2 cups romaine lettuce leaves.",
      ],
      dinner: [
        'Slice remainder of white onion and green pepper from lunch into chunks; set out 10 grape tomatoes. Alternate pieces of onion, pepper and cherry tomatoes on skewers and grill. Serve with 5 ounces of grilled salmon and one 6-inch whole-wheat pita pocket. Spread pita with 2 tablespoons hummus. Drink 1 cup fat-free milk.',
      ],
    });
    this.generalForm = this.fb.group({
      generalNote: [],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }
  notesType(e: any) {
    if (e.value === 'General') {
      this.isGeneral = true;
    } else {
      this.updateFormControls();
      this.isGeneral = false;
      // this.plansFieldNames = ["Subjective", "Objective", "Assessment", "Plan"];
      this.planForms = this.fb.group({
        nutrients: this.fb.group({
          calories: ['1500 Calories'],
          protein: ['5 gm Protein'],
          fat: ['3 gm Fat'],
        }),
        breakfast: [
          'Start the day with this flavorful and vibrant Shakshuka recipe, known as a staple breakfast dish throughout the Middle East. Serve with 2 slices of sprouted grain bread.',
        ],
        lunch: [
          "In a bowl, combine 7.5 ounces (half a 15-ounce can) canned chickpeas (rinse in a colander for two minutes to remove excess sodium and drain well; save other half for tomorrow's snack), 2 teaspoons olive oil, 1/4 cup chopped white onion, 1/4 cup chopped green pepper (save the rest of the onion and pepper for dinner), 1 tablespoon sliced black olives, 1/4 teaspoon ground black pepper, and 1.5 tablespoons white vinegar. Mix thoroughly. Serve mixture over 2 cups romaine lettuce leaves.",
        ],
        dinner: [
          'Slice remainder of white onion and green pepper from lunch into chunks; set out 10 grape tomatoes. Alternate pieces of onion, pepper and cherry tomatoes on skewers and grill. Serve with 5 ounces of grilled salmon and one 6-inch whole-wheat pita pocket. Spread pita with 2 tablespoons hummus. Drink 1 cup fat-free milk.',
        ],
      });
    }
  }
  updateFormControls() {
    // Remove all existing controls
    Object.keys(this.planForms.controls).forEach((key) => {
      this.planForms.removeControl(key);
    });
  }
  openEdit(e: any) {
    this.isEditable[e] = !this.isEditable[e];
  }

  getName(e: any) {
    return e;
  }

  savePlans(val: any) {
    console.log(val);
  }
}
