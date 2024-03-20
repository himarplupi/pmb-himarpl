"use client";

export function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <div>
            <p className="text-sm text-gray-500">
              &copy; HIMARPL 2024, All rights reserved.
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              Made with ❤️ by{" "}
              <a
                href="https://himarpl.com/department/kominfo"
                className="underline"
              >
                Dept. Kominfo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
