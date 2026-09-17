CREATE TYPE "public"."ally_down_state" AS ENUM('ok', 'zero', 'dead', 'dead_death_effect');--> statement-breakpoint
CREATE TYPE "public"."buff_status" AS ENUM('active', 'paused', 'expired');--> statement-breakpoint
CREATE TYPE "public"."buff_unit" AS ENUM('rounds', 'minutes', 'until_rest', 'permanent');--> statement-breakpoint
CREATE TYPE "public"."slot_status" AS ENUM('prepared', 'spent', 'converted', 'free', 'sacrificed');--> statement-breakpoint
CREATE TABLE "active_buffs" (
	"id" serial PRIMARY KEY NOT NULL,
	"buff_key" text NOT NULL,
	"label" text NOT NULL,
	"source" text NOT NULL,
	"caster_level" smallint DEFAULT 11 NOT NULL,
	"unit" "buff_unit" NOT NULL,
	"remaining" integer,
	"targets" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"extended" boolean DEFAULT false NOT NULL,
	"mythic" boolean DEFAULT false NOT NULL,
	"data" jsonb DEFAULT '{}'::jsonb NOT NULL,
	"status" "buff_status" DEFAULT 'active' NOT NULL,
	"started_round" integer,
	"started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone,
	"created_event_id" bigint
);
--> statement-breakpoint
CREATE TABLE "allies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text,
	"max_hp" integer,
	"con" smallint,
	"is_mythic" boolean DEFAULT true NOT NULL,
	"hp_current" integer,
	"down_state" "ally_down_state" DEFAULT 'ok' NOT NULL,
	"died_round" integer,
	"adjacent" boolean DEFAULT false NOT NULL,
	"front_line" boolean DEFAULT true NOT NULL,
	"active" boolean DEFAULT true NOT NULL,
	"sort_order" smallint DEFAULT 0 NOT NULL,
	"notes" text
);
--> statement-breakpoint
CREATE TABLE "character_state" (
	"id" integer PRIMARY KEY NOT NULL,
	"hp_current" integer NOT NULL,
	"hp_nonlethal" integer DEFAULT 0 NOT NULL,
	"hp_temp" integer DEFAULT 0 NOT NULL,
	"conditions" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"combat_active" boolean DEFAULT false NOT NULL,
	"round" integer DEFAULT 0 NOT NULL,
	"aura_active" boolean DEFAULT false NOT NULL,
	"divine_interference_used" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"gold" integer NOT NULL,
	"session_number" integer DEFAULT 1 NOT NULL,
	"last_full_rest_at" timestamp with time zone,
	"last_recuperation_at" timestamp with time zone,
	"last_mythic_reset_at" timestamp with time zone,
	"version" integer DEFAULT 1 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "character_state_single_row" CHECK ("character_state"."id" = 1)
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL,
	"kind" text NOT NULL,
	"label" text NOT NULL,
	"input" jsonb,
	"roll" jsonb,
	"patches" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"undone" boolean DEFAULT false NOT NULL,
	"undone_at" timestamp with time zone,
	"undo_of" bigint,
	"session_number" integer,
	"round" integer
);
--> statement-breakpoint
CREATE TABLE "notes" (
	"id" serial PRIMARY KEY NOT NULL,
	"kind" text NOT NULL,
	"body" text DEFAULT '' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "notes_kind_unique" UNIQUE("kind")
);
--> statement-breakpoint
CREATE TABLE "resource_state" (
	"key" text PRIMARY KEY NOT NULL,
	"current" integer NOT NULL,
	"max_override" integer,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"last_seen_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_agent" text
);
--> statement-breakpoint
CREATE TABLE "settings" (
	"id" integer PRIMARY KEY NOT NULL,
	"mythic_power_reset" text DEFAULT 'prayer' NOT NULL,
	"recuperation_restores_domain" boolean DEFAULT true NOT NULL,
	"blessed_touch_in_averages" boolean DEFAULT true NOT NULL,
	"mythic_domain_recharge_mode" text DEFAULT 'reset' NOT NULL,
	"scroll_cl" jsonb DEFAULT '{"restoration":7,"removeCurse":5,"neutralizePoison":7}'::jsonb NOT NULL,
	"mythic_heal_augmented_diamond" text DEFAULT 'unknown' NOT NULL,
	"relentless_vs_death_effects" boolean DEFAULT false NOT NULL,
	"amazing_initiative_allows" text DEFAULT 'channel' NOT NULL,
	"bol_threshold_mythic" text DEFAULT 'con' NOT NULL,
	"headband_new_24h" boolean DEFAULT false NOT NULL,
	"out_of_combat_clock" text DEFAULT 'manual' NOT NULL,
	"discord_prefix" text DEFAULT '/roll dice:' NOT NULL,
	"theme" text DEFAULT 'auto' NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "settings_single_row" CHECK ("settings"."id" = 1)
);
--> statement-breakpoint
CREATE TABLE "spell_slots" (
	"id" serial PRIMARY KEY NOT NULL,
	"level" smallint NOT NULL,
	"idx" smallint NOT NULL,
	"is_domain" boolean DEFAULT false NOT NULL,
	"spell_id" text,
	"status" "slot_status" DEFAULT 'prepared' NOT NULL,
	"spent_on" text,
	"spent_at" timestamp with time zone,
	"disabled" boolean DEFAULT false NOT NULL,
	CONSTRAINT "spell_slots_level_idx" UNIQUE("level","idx")
);
