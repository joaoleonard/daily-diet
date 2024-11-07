import CommonHeader from "@components/CommomHeader";
import {
  Container,
  DateAndHour,
  Form,
  FormInput,
  Input,
  Label,
  SafeArea,
  Textarea,
  ToggleButtonsWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import LargeButton from "@components/LargeButton";
import ToogleButton from "@components/ToggleButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { createMeal } from "@storage/meal/createMeal";
import { mealFindById } from "@storage/meal/mealFindById";
import { mealEdit } from "@storage/meal/mealEdit";
import { MealStorageDTO } from "@storage/meal/MealStorageDTO";

const defaultMeal = {
  id: 0,
  date: "",
  name: "",
  description: "",
  time: "",
  inDiet: true,
};

export default function CreateEditMeal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<MealStorageDTO>(defaultMeal);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { mealId } = route.params as { mealId: number };

  const isEditing = !!mealId;

  function formChangeHandler(field: string, value: string | boolean) {
    if (
      (meal.name === "" || meal.date === "" || meal.time === "",
      meal.description === "")
    ) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }
    setMeal({
      ...meal,
      [field]: value,
    });
  }

  async function handleCreateMeal() {
    try {
      await createMeal({...meal, id: Math.floor(Math.random() * 1000)});

      navigation.navigate("NewMealFeedback", { isInDiet: !!meal.inDiet });
    } catch (error) {
      console.error(error);
    }
  }

  async function handleEditMeal() {
    await mealEdit(meal);
    navigation.navigate("Home");
  }

  function formatDateInput(date: string) {
    const cleanedInput = date.replace(/\D/g, "");

    let day = cleanedInput.slice(0, 2);
    let month = cleanedInput.slice(2, 4);
    let year = cleanedInput.slice(4, 8);

    let formattedDate = day;
    if (month) formattedDate += "." + month;
    if (year) formattedDate += "." + year;

    formChangeHandler("date", formattedDate);
  }

  function formatTimeInput(date: string) {
    const cleanedInput = date.replace(/\D/g, "");

    let hour = cleanedInput.slice(0, 2);
    let minute = cleanedInput.slice(2, 4);

    let formattedTime = hour;
    if (minute) formattedTime += ":" + minute;

    formChangeHandler("time", formattedTime);
  }

  async function fetchMeal() {
    try {
      const meal = await mealFindById(mealId);
      console.log("AQUIIIIII", meal)
      setMeal(meal);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (mealId) {
      fetchMeal();
      setIsButtonDisabled(false);
    }
  }, []);

  return (
    <SafeArea>
      <Container>
        <CommonHeader title={isEditing ? "Editar refeição" : "Nova refeição"} />
        <Form>
          <FormInput>
            <Label>Nome</Label>
            <Input
              value={meal.name}
              onChangeText={formChangeHandler.bind(null, "name")}
            />
          </FormInput>

          <FormInput>
            <Label>Descrição</Label>
            <Textarea
              value={meal.description}
              onChangeText={formChangeHandler.bind(null, "description")}
            />
          </FormInput>

          <DateAndHour>
            <FormInput>
              <Label>Data</Label>
              <Input
                value={meal.date}
                keyboardType="numeric"
                onChangeText={(e) => formatDateInput(e)}
                placeholder="dd/mm/yyyy"
              />
            </FormInput>

            <FormInput>
              <Label>Hora</Label>
              <Input
                value={meal.time}
                onChangeText={(e) => formatTimeInput(e)}
                keyboardType="numeric"
                placeholder="hh:mm"
              />
            </FormInput>
          </DateAndHour>

          <FormInput>
            <Label>Está dentro da dieta?</Label>
            <ToggleButtonsWrapper>
              <ToogleButton
                text="Sim"
                isPositive
                selected={meal.inDiet}
                onPress={() => formChangeHandler("inDiet", true)}
              />
              <ToogleButton
                text="Não"
                selected={meal.inDiet === false}
                onPress={() => formChangeHandler("inDiet", false)}
              />
            </ToggleButtonsWrapper>
          </FormInput>

          <LargeButton
            buttonText={isEditing ? "Editar refeição" : "Cadastrar refeição"}
            showPlusIcon={false}
            onPress={isEditing ? handleEditMeal : handleCreateMeal}
            disabled={isButtonDisabled}
          />
        </Form>
      </Container>
    </SafeArea>
  );
}
