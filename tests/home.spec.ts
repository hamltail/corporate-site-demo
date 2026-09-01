import { expect, test } from "@playwright/test";

test("Animal Corporationの主要コンテンツが正しく表示される", async ({
  page,
}) => {
  await page.goto("/");

  // Hero
  const heroHeading = page.getByRole("heading", { level: 1 });

  await expect(heroHeading).toBeVisible();
  await expect(heroHeading).toContainText("Design");
  await expect(heroHeading).toContainText("Technology");

  await expect(
    page.getByText("デザインとテクノロジーで、").first(),
  ).toBeVisible();

  await expect(
    page.getByText("より良い体験と未来を作る。").first(),
  ).toBeVisible();

  // Header navigation
  const globalNav = page.getByRole("navigation", {
    name: "グローバルナビゲーション",
  });

  await expect(
    globalNav.getByRole("link", { name: "私たちについて" }),
  ).toHaveAttribute("href", "#about");

  await expect(
    globalNav.getByRole("link", { name: "お知らせ" }),
  ).toHaveAttribute("href", "#news");

  await expect(
    globalNav.getByRole("link", { name: "お問い合わせ" }),
  ).toHaveAttribute("href", "#contact");

  await expect(
    globalNav.getByRole("link", { name: "採用情報" }),
  ).toHaveAttribute("href", "#recruit");

  // About
  const aboutHeading = page.getByRole("heading", {
    level: 2,
    name: "About",
  });

  await aboutHeading.scrollIntoViewIfNeeded();
  await expect(aboutHeading).toBeVisible();

  await expect(page.getByText("私たちについて").last()).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 3, name: "Human Centered" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 3, name: "Impactful" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 3, name: "Technology Driven" }),
  ).toBeVisible();

  await expect(
    page.getByRole("heading", { level: 3, name: "Simple & Beautiful" }),
  ).toBeVisible();
});
