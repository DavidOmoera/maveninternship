import { Dialog } from "@mui/material";
import { Button } from "components/atoms/Button";
import { PlanCard } from "components/molecules/PlanCard";
import { PageContainer } from "components/templates/PageContainer";
import { useState } from "react";
import xIcon from "assets/X.svg";
import { colors } from "constants/common";
import { useAppDispatch, useAppSelector } from "utils/helpers";
import { userDataSelector } from "store/slices/auth/selectors";
import { updateUserData } from "store/slices/user";

const PLANS = [
  {
    color: "blue",
    title: "Legislative AI",
    description: "The perfect Legislature analysis tool",
    price: "$000*",
  },
  {
    color: "red",
    title: "Regulatory AI",
    description: "The perfect Regulatory analysis tool",
    price: "$000*",
  },
  {
    color: "green",
    title: "Pro",
    description: "The perfect Legislature and Regulatory analysis tool",
    price: "$000*",
  },
];
export function ChangePlan() {
  const userData = useAppSelector(userDataSelector);
  const dispatch = useAppDispatch();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);
  const [newPlan, setNewPlan] = useState<string>();

  function onSelectPlan(title: string) {
    setIsConfirmationModalOpen(true);
    setNewPlan(title);
  }

  function onCloseCancelPlan() {
    setIsConfirmationModalOpen(false);
  }

  function onConfirmPlanCancellation() {
    if (newPlan) {
      dispatch(updateUserData({ subscription_plan: newPlan }));
    }
    setIsConfirmationModalOpen(false);
  }

  function onClosePlanCancellationModal() {
    setIsConfirmationModalOpen(false);
    setNewPlan(undefined);
  }

  function onCancelPlan() {
    setIsConfirmationModalOpen(true);
    setNewPlan(undefined);
  }

  return (
    <PageContainer title="My Profile" previousPageTitle="Change Plan">
      <div className="bg-white mx-9 mt-6 rounded-xl p-9 md:min-w-[400px] sm:min-w-[580px">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 px-12 sm:p-0 ]">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.title}
              color={plan.color}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              isCurrentPlan={plan.title === userData?.subscription_plan}
              onCancelPlan={onCancelPlan}
              onSelectPlan={onSelectPlan}
            />
          ))}
        </div>
      </div>

      <Dialog
        open={isConfirmationModalOpen}
        PaperProps={{ style: { padding: "24px", width: "430px" } }}
        onClose={onClosePlanCancellationModal}
      >
        <div className="row justify-between w-full">
          <h4>Cancel Subscription</h4>
          <div
            className="row items-center justify-center rounded-full w-5 h-5  bg-neutral100"
            onClick={onCloseCancelPlan}
          >
            <img src={xIcon} className="w-3 h-3" />
          </div>
        </div>

        <hr className="mt-3 mb-5 bg-neutral100" />

        <p className="text-neutral700">
          Are you sure you want to cancel your subscription?
        </p>
        <div className="row justify-end w-full mt-9">
          <div className="row gap-2">
            <Button
              variant="secondary"
              text="Cancel"
              onClick={onCloseCancelPlan}
            />
            <Button
              text="Yes, Cancel Plan"
              onClick={onConfirmPlanCancellation}
              style={{ backgroundColor: colors.error }}
            />
          </div>
        </div>
      </Dialog>
    </PageContainer>
  );
}
