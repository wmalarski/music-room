import { Flex, FormLabel, IconButton, Input, Typography } from '@music-room/ui';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Cross2Icon, RowSpacingIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'next-i18next';
import { ChangeEvent, ReactElement, useState } from 'react';

type Props = {
  query: string;
  onQueryChange: (query: string) => void;
};

export const RoomUsersHeader = ({
  query,
  onQueryChange,
}: Props): ReactElement => {
  const { t } = useTranslation('settings');

  const [isOpen, setIsOpen] = useState(false);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(event.target.value);
  };

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <Flex direction="column" gap="md">
        <Flex
          direction="row"
          gap="md"
          alignItems="center"
          justifyContent="spaceBetween"
        >
          <Typography size="md" kind="description">
            {t('roomUsers')}
          </Typography>
          <Collapsible.Trigger asChild>
            <IconButton>
              {isOpen ? <Cross2Icon /> : <RowSpacingIcon />}
            </IconButton>
          </Collapsible.Trigger>
        </Flex>
        <Collapsible.Content>
          <Flex direction="row" gap="md" alignItems="center">
            <FormLabel htmlFor="search">{t('listSearch')}</FormLabel>
            <Input
              id="search"
              placeholder={t('listSearch')}
              value={query}
              onChange={handleValueChange}
            />
          </Flex>
        </Collapsible.Content>
      </Flex>
    </Collapsible.Root>
  );
};
