import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function DeliveryInfo() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h3>ФИО</h3>
        <Input />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Номер</h3>
        <Input />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Адрес</h3>
        <Input />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Ориентир</h3>
        <Input />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Коментарий</h3>
        <Textarea />
      </div>
      <div className="flex flex-col gap-3">
        <h3>Выберите способ оплаты</h3>
        <div>
          <RadioGroup className="flex flex-wrap" defaultValue="comfortable">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label className={cn("text-lg")} htmlFor="r1">
                Наличные
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label className={cn("text-lg")} htmlFor="r2">
                Payme
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label className={cn("text-lg")} htmlFor="r3">
                Click
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}
