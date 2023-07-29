import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import { useForm } from "react-hook-form";
import { bool, number, object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import "./contact.scss";

const schema = object({
  companyName: string().required("会社名/学校名は必須になります。"),
  department: string(),
  fullName: string().required("お名前（フルネーム）は必須になります。"),
  furigana: string().required("ふりがなは必須になります。"),
  email: string()
    .email("正しい形式で入力してください。")
    .required("メールアドレスは必須になります。"),
  confirmEmail: string()
    .email("正しい形式で入力してください。")
    .required("メールアドレス（確認）は必須になります。")
    .oneOf([ref("email")], "確認用メールアドレスが異なります。"),
  phone: number()
    .typeError("電話番号半角数字で入力してください。")
    .nullable()
    .transform((_, val) => (val !== "" ? Number(val) : null)),
  content: string().required("お問い合わせ内容は必須になります。"),
  privacyPolicy: bool().oneOf([true], "同意が必須になります。"),
});

const Contact = () => {
  const [confirm, setConfirm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      companyName: "",
      department: "",
      fullName: "",
      furigana: "",
      email: "",
      confirmEmail: "",
      phone: "",
      content: "",
      privacyPolicy: false,
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSuccess = (values) => {
    setConfirm(true);
    onNextStep(2); // Move to the next step when the form is successfully validated
  };

  const onError = (error) => {
    console.log(error);
  };

  const convertUTCtoJST = (utcDate) => {
    const jstOffset = 9 * 60; // Japan Standard Time (JST) is UTC+9
    const utcTime = utcDate.getTime();
    const jstTime = utcTime + jstOffset * 60 * 1000; // Convert to milliseconds
    return new Date(jstTime);
  };

  const sendEmail = async (values) => {
    const currentDate = convertUTCtoJST(new Date());
    const jstDate = currentDate.toLocaleString("ja-JP");

    const subject = "【BluseTech】お問い合わせ";
    const emailBody = `
      ${jstDate} (JPT)

      お問い合わせがありました。
      ==================================================
        お問い合わせ情報
      ==================================================

      ■ 会社名/学校名：
      ${values.companyName}

      ■ 部署名/所属：
      ${values.department}

      ■ お名前（フルネーム）：
      ${values.fullName}

      ■ ふりがな：
      ${values.furigana}

      ■ メールアドレス：
      ${values.email}

      ■ 電話番号:
      ${values.phone}

      ■ お問い合わせ内容：
      ${values.content}

      ■ 個人情報の取り扱い：
      ${values.privacyPolicy ? "同意する" : "同意しない"}
    `;

    // contact@blusetech.co.jp
    const mailtoURL = `mailto:device.hcm@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoURL;
    setSuccess(true);
    onNextStep(2);
  };

  const onNextStep = () => {
    if (step === 1 && !confirm) {
      // If in Step 1 and not confirmed, show confirmation modal
      setConfirm(true);
      setStep((prevStep) => prevStep + 1);
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const onPreviousStep = () => {
    if (step === 2 && confirm) {
      // If in Step 2 and confirmed, hide confirmation modal
      setConfirm(false);
    } else {
      setStep((prevStep) => prevStep - 1);
    }
  };
  return (
    <>
      <Header />
      <main className="contact">
        <div className="contact__header">
          <Title addClass={"contact__title"}>CONTACT</Title>

          <div className="contact__steps">
            <div className={`contact__step ${step === 1 ? "active" : ""}`}>
              <div className="dot">
                <div />
              </div>
              <span className="title">入力</span>
            </div>
            <div className={`contact__step ${step === 2 ? "active" : ""}`}>
              <div className="dot">
                <div />
              </div>
              <span className="title">確認</span>
            </div>
            <div className={`contact__step ${step === 3 ? "active" : ""}`}>
              <div className="dot">
                <div />
              </div>
              <span className="title">完了</span>
            </div>
          </div>
        </div>

        {!success ? (
          <form
            className="form-container"
            onSubmit={handleSubmit(onSuccess, onError)}
          >
            <div className="contact__content">
              <p className="contact__content__txt">
                本ページは、弊社に関するお問い合わせ窓⼝となります。
                <br />
                お問い合わせ内容を確認後、担当よりご連絡いたします。
              </p>
              <p className="contact__content__txt" style={{ fontSize: 14 }}>
                <span className="star">※</span>は必須項⽬です。
              </p>
              {errors ? (
                <p className="contact__content__txt--alert">
                  入力内容に誤りがあります。下記の項目をご確認ください。
                </p>
              ) : null}
            </div>
            <div className="contact__form">
              {[
                {
                  name: "companyName",
                  txtShow: "会社名/学校名",
                  required: true,
                },
                { name: "department", txtShow: "部署名/所属", required: false },
                {
                  name: "fullName",
                  txtShow: "お名前（フルネーム）",
                  required: true,
                },
                { name: "furigana", txtShow: "ふりがな", required: true },
                { name: "email", txtShow: "メールアドレス", required: true },
                {
                  name: "confirmEmail",
                  txtShow: "メールアドレス（確認）",
                  required: true,
                },
                { name: "phone", txtShow: "電話番号", required: false },
              ].map((input, index) => (
                <div className="input-group" key={index}>
                  <label htmlFor={input.name} className="input-label">
                    {input.txtShow}{" "}
                    {input.required ? <span className="star">※</span> : null}
                  </label>
                  <div className="form-input">
                    <input
                      type="text"
                      id={input.name}
                      name={input.name}
                      placeholder="プレイスホールダー"
                      {...register(input.name)}
                      className={`${confirm ? "input--confirm" : null}`}
                      disabled={confirm}
                    />
                    {errors[input.name] ? (
                      <p className="errorAlert">{errors[input.name].message}</p>
                    ) : null}
                  </div>
                </div>
              ))}
              <div className="input-group" style={{ alignItems: "flex-start" }}>
                <label htmlFor="content" className="input-label">
                  お問い合わせ内容 <span className="star">※</span>
                </label>
                <div className="form-input">
                  <textarea
                    id="content"
                    name="content"
                    {...register("content")}
                    className={`${confirm ? "input--confirm" : null}`}
                    disabled={confirm}
                  />
                  {errors.content ? (
                    <p className="errorAlert">{errors.content.message}</p>
                  ) : null}
                </div>
              </div>
              <div className="input-group">
                <label
                  htmlFor="privacyPolicy"
                  className="input-label"
                  style={{ alignItems: "flex-start" }}
                >
                  個人情報の取り扱い <span className="star">※</span>
                </label>
                <div className="form-input">
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      name="privacyPolicy"
                      {...register("privacyPolicy")}
                    />
                    同意する
                  </div>
                  <p className="txt--rules">
                    個⼈情報の取り扱いについて、詳しくは弊社の
                    <Link href="/philosophy" className="link">
                      プライバシーポリシー
                    </Link>
                    をご覧ください。
                    <br />
                    {errors.privacyPolicy ? (
                      <span className="errorAlert">
                        {errors.privacyPolicy.message}
                      </span>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>

            {confirm ? (
              <div className="contact__submit">
                <button
                  className="btn--back"
                  type="button"
                  onClick={handleSubmit(() => {
                    setConfirm(false);
                    onPreviousStep();
                  })}
                >
                  戻る
                </button>
                <button
                  className="btn--next"
                  type="submit"
                  onClick={handleSubmit(sendEmail)}
                >
                  入力内容の確認
                </button>
              </div>
            ) : (
              <div className="contact__submit">
                <button
                  className="btn--next"
                  type="button"
                  onClick={handleSubmit(onSuccess, onError)}
                >
                  入力内容の確認
                </button>
              </div>
            )}
          </form>
        ) : (
          <div className="contact__notification">
            <div className="contact__notification__title">
              お問い合わせありがとうございます。
            </div>
            <div className="contact__notification__content">
              内容を確認させていただき、担当よりご連絡させていただきます。
              <br />
              数⽇経っても折り返しのご連絡がない場合、送信エラーなどの可能性がございます。
              <br />
              お⼿数ですが、改めてお問い合わせいただけますと幸いです。
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Contact;
