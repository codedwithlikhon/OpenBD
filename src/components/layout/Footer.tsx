"use client";
import { Grid, Link, Spacer, Text } from '@geist-ui/core'
import { Telegram, Github } from '@geist-ui/icons'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 py-8 mt-auto">
      <Grid.Container gap={2} justify="center">
        <Grid xs={24} md={12} className="text-center">
          <Text p className="bengali-text">
            Built with ❤️ by <strong>Likhon Sheikh</strong>
          </Text>
          <Spacer y={0.5} />
          <div className="flex justify-center gap-4">
            <Link
              href="https://t.me/likhonsheikh"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Telegram size={20} />
              Telegram
            </Link>
            <Link
              href="https://github.com/codedwithlikhon"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary"
            >
              <Github size={20} />
              GitHub
            </Link>
          </div>
          <Spacer y={1} />
          <Text small type="secondary">
            © 2024 OpenBD. AGI for Bangladesh. Open Source under MIT License.
          </Text>
        </Grid>
      </Grid.Container>
    </footer>
  )
}